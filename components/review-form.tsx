'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useForm } from 'react-hook-form';
import { Textarea } from './ui/textarea';
import { useSession, signIn } from 'next-auth/react';
import { useEffect } from 'react';

const formSchema = z.object({
	email: z.string().email(),
	rating: z.coerce.number().min(1, { message: 'rating must be at least 1' }).max(10, { message: 'rating must be max 10' }),
	message: z.string().min(6, {
		message: 'Message must be at least 6 characters',
	}),
});

export function ReviewForm({ id }: { id: number }) {
	const { data: session } = useSession();
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			email: session?.user?.email || '',
			rating: undefined,
			message: '',
		},
	});

	useEffect(() => {
		form.setValue('email', session?.user?.email || '');
	}, [session?.user?.email]);

	// 2. Define a submit handler.
	async function onSubmit(values: z.infer<typeof formSchema>) {
		const response = await fetch(`/api/games`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				gameId: id,
				name: session?.user?.name,
				email: values.email,
				avatar: session?.user?.image,
				content: values.message,
				rating: values.rating,
			}),
		});
		if (!response.ok) console.log(response);
	}

	if (!session?.user) {
		return (
			<div className="max-w-2xl py-6 px-6 bg-gray-800 rounded-2xl font-semibold flex items-center flex-wrap gap-6 md:px-12">
				<p>Log In First To Be Able Leave Review About Game!</p>
				<Button onClick={() => signIn()} className="bg-sky-500 hover:bg-sky-700">
					Log In User
				</Button>
			</div>
		);
	}

	if (session?.user) {
		return (
			<Form {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
					<h3 className="font-bold">Comments Form</h3>
					<div className="flex items-center gap-6">
						<FormField
							control={form.control}
							name="email"
							disabled={session.user ? true : false}
							render={({ field }) => (
								<FormItem>
									<FormLabel>Email</FormLabel>
									<FormControl>
										<Input placeholder="your email..." {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="rating"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Rating</FormLabel>
									<FormControl>
										<Input type="number" placeholder="rating game" {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
					</div>
					<FormField
						control={form.control}
						name="message"
						render={({ field }) => (
							<FormItem>
								<FormLabel className="text-base">Message</FormLabel>
								<FormControl>
									<Textarea placeholder="My review about game..." {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<Button type="submit" className="bg-sky-500 hover:bg-sky-700">
						Submit Review
					</Button>
					<p className="font-bold text-green-400">{form.formState.isSubmitSuccessful ? 'Review has been added successfully! Reload website to see your review' : null}</p>
				</form>
			</Form>
		);
	}
}
