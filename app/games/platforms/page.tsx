'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { RoundedLink } from '@/components/index';

type PlatformProps = {
	name: string;
	slug: string;
};

const Page = () => {
	const [platforms, setPlatforms] = useState<PlatformProps[]>([]);

	useEffect(() => {
		fetch('/api/games/platforms', { cache: 'no-store' })
			.then((res) => res.json())
			.then((data) => setPlatforms(data))
			.catch((err) => console.log(err));
	}, []);

	return (
		<main>
			<div className="max-w-7xl mx-auto px-8">
				<motion.h3 className="lg:text-lg mb-2" initial={{ x: -50, opacity: 0 }} whileInView={{ x: 0, opacity: 0.8 }} transition={{ duration: 1 }} viewport={{ once: true }}>
					#platforms
				</motion.h3>
				<motion.h1 className="font-extrabold text-3xl lg:text-4xl mb-4" initial={{ x: -50, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ duration: 1 }} viewport={{ once: true }}>
					<span className="text-sky-500">Games</span> Platforms
				</motion.h1>
				<motion.p className="max-w-4xl opacity-80 leading-9 mb-6" initial={{ x: -50, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ duration: 1 }} viewport={{ once: true }}>
					The "All Games Platforms" page serves as a comprehensive directory, displaying a wide array of gaming platforms available to users. It offers a detailed overview of each platform, including specifications, compatibility, and features,
					aiding gamers in making informed decisions about their preferred gaming environment. Additionally, the page is designed to provide a seamless browsing experience, allowing users to easily explore and compare various gaming platforms.
				</motion.p>
				<section className="flex items-center gap-6 flex-wrap">
					{platforms.length ? platforms.map(({ name, slug }: PlatformProps) => <RoundedLink name={name} slug={`/games/platforms/${slug}`} color="bg-gray-700 hover:bg-sky-500" />) : <p className="font-bold">Loading Platforms...</p>}
				</section>
			</div>
		</main>
	);
};

export default Page;
