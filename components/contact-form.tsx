'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useForm } from 'react-hook-form';
import { Textarea } from '@/components/ui/textarea';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';
import Link from 'next/link';
import { useSession, signIn } from 'next-auth/react';
import { useEffect } from 'react';

const formSchema = z.object({
	email: z.string().email(),
	message: z.string().min(15, {
		message: 'Message must be at least 15 characters',
	}),
});

export function ContactForm() {
	const { data: session } = useSession();
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			email: session?.user?.email || '',
			message: '',
		},
	});

	useEffect(() => {
		form.setValue('email', session?.user?.email || '');
	}, [session?.user?.email]);

	// 2. Define a submit handler.
	async function onSubmit(values: z.infer<typeof formSchema>) {
		await fetch('/api/contact', {
			method: 'POST',
			body: JSON.stringify({
				email: values.email,
				message: values.message,
			}),
		});
		form.reset({
			email: session?.user?.email || '',
			message: '',
		});
	}

	if (!session?.user?.email) {
		return (
			<div className="py-6 px-12 bg-gray-800 rounded-2xl font-semibold text-center flex items-center gap-6">
				<p>Log In First To Be Able Contact With Us!</p>
				<Button onClick={() => signIn()} className="bg-green-500 hover:bg-green-700">
					Log In User
				</Button>
			</div>
		);
	}

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 w-full">
				<FormField
					control={form.control}
					name="email"
					disabled={session?.user ? true : false}
					render={({ field }) => (
						<FormItem>
							<FormLabel className="text-base">Email</FormLabel>
							<FormControl>
								<Input placeholder="My email..." {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="message"
					render={({ field }) => (
						<FormItem>
							<FormLabel className="text-base">Message</FormLabel>
							<FormControl>
								<Textarea placeholder="Hello, I would like ask..." {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<Button type="submit" className="bg-green-500 hover:bg-green-700">
					Submit Message
				</Button>
				<p>{form.formState.isSubmitSuccessful ? 'Message is submitted' : null}</p>
				<p className="text-center font-semibold lg:text-lg">and socials</p>
				<div className="w-full flex items-center justify-center gap-6">
					<Link href="https://www.facebook.com" target="_blank">
						<div className="p-4 rounded-xl text-lg bg-white bg-opacity-5 cursor-pointer hover:bg-opacity-20 duration-200 lg:text-2xl">
							<FaFacebookF />
						</div>
					</Link>
					<Link href="https://www.instagram.com" target="_blank">
						<div className="p-4 rounded-xl text-lg bg-white bg-opacity-5 cursor-pointer hover:bg-opacity-20 duration-200 lg:text-2xl">
							<FaInstagram />
						</div>
					</Link>
					<Link href="https://twitter.com" target="_blank">
						<div className="p-4 rounded-xl text-lg bg-white bg-opacity-5 cursor-pointer hover:bg-opacity-20 duration-200 lg:text-2xl">
							<FaTwitter />
						</div>
					</Link>
				</div>
			</form>
		</Form>
	);
}
