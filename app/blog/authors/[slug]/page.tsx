import React from 'react';
import { handleAuthorDetails } from '@/services/index';
import Image from 'next/image';
import Link from 'next/link';

type PostProps = {
	slug: string;
	categories: { name: string }[];
	title: string;
	image: { url: string };
	createdAt: string;
};

const Page = async ({ params }: { params: { slug: string } }) => {
	const author = await handleAuthorDetails(params.slug);

	return (
		<main>
			<div className="max-w-7xl mx-auto px-8">
				<h2 className="lg:text-lg mb-2">#author</h2>
				<section className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between lg:gap-12">
					<div>
						<h1 className="font-extrabold text-3xl lg:text-4xl mb-4">{author.name}</h1>
						<p className="max-w-4xl opacity-80 leading-9">{author.description}</p>
					</div>
					<Image src={author.image.url} alt={author.name} width={400} height={400} className="mb-6 aspect-video rounded-2xl object-cover object-center" />
				</section>
				<section className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 md:mt-12">
					{author.posts.map(({ slug, categories, title, createdAt, image: { url } }: PostProps) => (
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
