import React from 'react';
import { handleCategories } from '@/services/index';
import { RoundedLink } from '@/components/index';

type CategoryProps = {
	name: string;
	slug: string;
};

const Page = async () => {
	const categories = await handleCategories();

	return (
		<main>
			<div className="max-w-7xl mx-auto px-8">
				<h3 className="lg:text-lg mb-2">#categories</h3>
				<h2 className="font-extrabold text-3xl lg:text-4xl mb-4">
					Categories <span className="text-sky-500">From Blog Posts</span>
				</h2>
				<p className="max-w-4xl opacity-80 leading-9 mb-6">
					This is the section about categories. Here, you can explore different topics and themes that organize the content and make navigation easier. Dive into a variety of subjects and find posts grouped based on their relevance and subject
					matter. Whether you're interested in technology, lifestyle, or any other subject, this section allows you to delve into specific areas of interest.
				</p>
				<section className="flex items-center gap-6 flex-wrap">
					{categories.length ? (
						categories.map(({ name, slug }: CategoryProps, index: number) => <RoundedLink key={index} name={name} slug={`/blog/categories/${slug}`} color="bg-gray-700 hover:bg-sky-500" />)
					) : (
						<p className="font-bold">Loading Categories...</p>
					)}
				</section>
			</div>
		</main>
	);
};

export default Page;
