import React from 'react';
import { handlePostDetails, handleSimiliarPosts } from '@/services/index';
import Image from 'next/image';
import { RoundedLink } from '@/components/index';
import Link from 'next/link';

type CategoryProps = {
	name: string;
	slug: string;
};

const Page = async ({ params }: { params: { slug: string } }) => {
	const post = await handlePostDetails(params.slug);
	const similiarPosts = await handleSimiliarPosts(params.slug, [post.categories[0].name]);

	return (
		<main>
			<div className="max-w-7xl mx-auto px-8">
				<h2 className="lg:text-lg mb-2">#post</h2>
				<h1 className="font-extrabold text-3xl lg:text-4xl mb-4">{post.title}</h1>
				<Image src={post.image.url} alt={post.title} width={550} height={550} className="mb-6 aspect-video rounded-2xl object-cover object-center" />
				<p className="opacity-80 leading-9 mb-6">{post.content}</p>
				<section>
					<h3 className="font-bold mb-4">Category</h3>
					<div className="flex items-center gap-6 flex-wrap mb-12">
						{post.categories.map(({ name, slug }: CategoryProps, index: number) => (
							<RoundedLink key={index} name={name} slug={`/blog/categories/${slug}`} color="bg-gray-700 hover:bg-sky-500" />
						))}
					</div>
				</section>
				<section className="flex items-center gap-6 mb-12">
					<Image src={post.author.image.url} alt="author portrait" width={500} height={500} className="rounded-2xl w-24 h-24 object-cover object-center" />
					<div>
						<Link href={`/blog/authors/${post.author.slug}`}>
							<p className="font-bold cursor-pointer">{post.author.name}</p>
						</Link>
						<p className="max-w-sm opacity-80">{post.author.bio}</p>
					</div>
				</section>
				<section>
					<h3 className="font-bold mb-4">Similiar Posts</h3>
					<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
						{similiarPosts.length ? (
							similiarPosts.map((post: any) => (
								<article className="relative rounded-2xl px-6 py-4 bg-white bg-opacity-5 cursor-pointer">
									<Link href={`/blog/${post.slug}`}>
										<div className="flex flex-col sm:flex-row sm:items-end sm:justify-between h-full">
											<div>
												<h3 className="font-semibold">/ {post.slug}</h3>
												<h2 className="font-bold text-xl">{post.title}</h2>
											</div>
											<p>24.02.2023</p>
										</div>
										<Image src={post.image.url} alt="blog post image" width={500} height={500} className="absolute top-0 left-0 w-full h-full object-cover object-center rounded-2xl opacity-10 hover:opacity-100 duration-300" />
									</Link>
								</article>
							))
						) : (
							<p>Currently no posts</p>
						)}
					</div>
				</section>
			</div>
		</main>
	);
};

export default Page;
