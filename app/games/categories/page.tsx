'use client';

import React, { useState, useEffect } from 'react';
import { RoundedLink } from '@/components/index';

type CategoryProps = {
	name: string;
	slug?: string;
};

const Page = () => {
	const [categories, setCategories] = useState<CategoryProps[]>([]);

	useEffect(() => {
		fetch('/api/games/categories', { cache: 'no-store' })
			.then((res) => res.json())
			.then((data) => setCategories(data))
			.catch((err) => console.log(err));
	}, []);

	return (
		<main>
			<div className="max-w-7xl mx-auto px-8">
				<h3 className="lg:text-lg mb-2">#categories</h3>
				<h1 className="font-extrabold text-3xl lg:text-4xl mb-4">
					Game <span className="text-sky-500">Categories</span>
				</h1>
				<p className="max-w-4xl opacity-80 leading-9 mb-6">
					The section housing all game categories offers a diverse and engaging selection of entertainment options for enthusiasts of all tastes and preferences. From action-packed adventures and strategy simulations to immersive role-playing
					experiences.
				</p>
				<section className="flex items-center gap-6 flex-wrap">
					{categories.length ? categories.map(({ name, slug }: CategoryProps) => <RoundedLink name={name} slug={`/games/categories/${slug}`} color="bg-gray-700 hover:bg-sky-500" />) : <p className="font-bold">Loading Categories...</p>}
				</section>
			</div>
		</main>
	);
};

export default Page;
