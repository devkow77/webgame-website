import React from 'react';
import { handleBlogPosts } from '@/services/index';
import Image from 'next/image';
import Link from 'next/link';
import { RoundedLink } from '@/components/index';

type CategoryProps = {
	name: string;
	slug: string;
};

type PostProps = {
	slug: string;
	categories: { name: string }[];
	title: string;
	image: { url: string };
	createdAt: string;
};

const Page = async () => {
	const data = await handleBlogPosts();

	return (
		<main>
			<div className="max-w-7xl mx-auto px-8">
				<h3 className="lg:text-lg mb-2">#blog</h3>
				<h2 className="font-extrabold text-3xl lg:text-4xl mb-4">
					<span className="text-sky-500">Read and have fun</span> with all existing posts
				</h2>
				<p className="max-w-4xl opacity-80 leading-9 mb-6">
					This page is dedicated to providing insightful and engaging blog content on a wide range of topics. From practical advice to thought-provoking insights, readers can expect to find valuable information and diverse perspectives. Whether
					you're seeking tips, inspiration, or simply a good read, this blog aims to cater to a diverse audience with its varied and informative posts.
				</p>
				<section className="flex items-center gap-6 flex-wrap">
					{data.categories.length ? (
						data.categories.map(({ name, slug }: CategoryProps, index: number) => <RoundedLink key={index} name={name} slug={`/blog/categories/${slug}`} color="bg-gray-700 hover:bg-sky-500" />)
					) : (
						<p className="font-bold">Loading Categories...</p>
					)}
				</section>
				<section className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
					{data.posts.map(({ slug, categories, title, createdAt, image: { url } }: PostProps) => (
						<div className="relative rounded-2xl px-6 py-4 cursor-pointer overflow-hidden">
							<Link href={`/blog/${slug}`}>
								<div className="flex flex-col sm:flex-row sm:items-end sm:justify-between h-full">
									<div>
										<h3 className="font-semibold">/ {categories[0].name}</h3>
										<h2 className="font-bold text-xl max-w-[250px]">{title}</h2>
									</div>
									<p className="font-semibold">{new Date(createdAt).toDateString()}</p>
								</div>
								<Image src={url} alt={title} width={500} height={500} className="absolute top-0 left-0 w-full h-full object-cover object-center rounded-2xl opacity-10 hover:opacity-100 hover:scale-110 duration-300" />
							</Link>
						</div>
					))}
				</section>
			</div>
		</main>
	);
};

export default Page;
