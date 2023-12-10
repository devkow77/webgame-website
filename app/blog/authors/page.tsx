import React from 'react';
import { handleAuthors } from '@/services/index';
import Image from 'next/image';
import Link from 'next/link';

type AuthorProps = {
	image: { url: string };
	slug: string;
	name: string;
	bio: string;
};

const Page = async () => {
	const authors = await handleAuthors();

	return (
		<main>
			<div className="max-w-7xl mx-auto px-8">
				<h3 className="lg:text-lg mb-2">#authors</h3>
				<h2 className="font-extrabold text-3xl lg:text-4xl mb-4">
					Our Blog <span className="text-sky-500">Posts Writters</span>
				</h2>
				<p className="max-w-4xl opacity-80 leading-9 mb-12">
					This section is dedicated to the authors of the blog posts. Here, you can learn more about the creators who share their insights and knowledge through the published content. Discover the diversity of perspectives and voices that shape
					this captivating blogging space. Take a closer look at the profiles of these authors and understand what inspires them to share their thoughts on the pages of this blog.
				</p>
				<section className="grid grid-cols-1 gap-12 lg:grid-cols-2">
					{authors.map(({ name, image: { url }, slug, bio }: AuthorProps) => (
						<div className="flex flex-wrap items-center gap-4">
							<Image src={url} alt={name} width={500} height={500} className="rounded-2xl w-24 h-24 object-cover object-center" />
							<div>
								<Link href={`/blog/authors/${slug}`}>
									<p className="font-bold cursor-pointer">{name}</p>
								</Link>
								<p className="max-w-sm opacity-80">{bio}</p>
							</div>
						</div>
					))}
				</section>
			</div>
		</main>
	);
};

export default Page;
