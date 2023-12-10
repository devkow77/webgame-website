'use client';

import { RoundedLink } from '@/components/index';
import React, { useState, useEffect } from 'react';

type DeveloperProps = {
	name: string;
	slug: string;
};

const Page = () => {
	const [developers, setDevelopers] = useState<DeveloperProps[]>([]);

	useEffect(() => {
		fetch('/api/games/developers', { cache: 'no-store' })
			.then((res) => res.json())
			.then((data) => setDevelopers(data))
			.catch((err) => console.log(err));
	}, []);

	return (
		<main>
			<div className="max-w-7xl mx-auto px-8">
				<h3 className="lg:text-lg mb-2">#developers</h3>
				<h1 className="font-extrabold text-3xl lg:text-4xl mb-4">
					Developers From <span className="text-sky-500">All Games</span>
				</h1>
				<p className="max-w-4xl opacity-80 leading-9 mb-6">
					Within this section, you'll find an extensive compilation of gaming developers, offering an encompassing glimpse into a myriad of genres and themes, ensuring a rich and diverse experience for gamers of all preferences.
				</p>
				<section className="flex items-center gap-6 flex-wrap">
					{developers.length ? developers.map(({ name, slug }: DeveloperProps) => <RoundedLink name={name} slug={`/games/developers/${slug}`} color="bg-gray-700 hover:bg-sky-500" />) : <p className="font-bold">Loading Developers...</p>}
				</section>
			</div>
		</main>
	);
};

export default Page;
