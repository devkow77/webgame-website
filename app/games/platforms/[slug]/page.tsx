'use client';

import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInfiniteQuery } from '@tanstack/react-query';
import { fetchGames, fixTitle } from '@/lib/functions';
import { useIntersection } from '@mantine/hooks';
import { GameCard } from '@/components/index';

const Page = ({ params }: { params: { slug: string } }) => {
	const { data, fetchNextPage } = useInfiniteQuery(
		['query'],
		async ({ pageParam = 1 }) => {
			const response = await fetchGames(`/api/games/platforms/${params.slug}?page=${pageParam}`);
			return response;
		},
		{
			getNextPageParam: (_, pages) => {
				return pages.length + 1;
			},
			initialData: {
				pages: [],
				pageParams: [1],
			},
		}
	);

	const lastGameRef = useRef<HTMLElement>(null);
	const { ref, entry } = useIntersection({
		root: lastGameRef.current,
		threshold: 1,
	});

	useEffect(() => {
		if (entry?.isIntersecting) fetchNextPage();
	}, [entry]);

	const _games = data?.pages.flatMap((page) => page);

	return (
		<main>
			<div className="max-w-7xl mx-auto px-8">
				<motion.h3 className="lg:text-lg mb-2" initial={{ x: -50, opacity: 0 }} whileInView={{ x: 0, opacity: 0.8 }} transition={{ duration: 1 }} viewport={{ once: true }}>
					#platform
				</motion.h3>
				<motion.h1 className="font-extrabold text-3xl lg:text-4xl mb-4" initial={{ x: -50, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ duration: 1 }} viewport={{ once: true }}>
					{fixTitle(params.slug)}
				</motion.h1>
				<motion.p className="max-w-4xl opacity-80 leading-9 mb-6" initial={{ x: -50, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ duration: 1 }} viewport={{ once: true }}>
					Welcome to our blog! Explore a world of insightful articles, engaging stories, and thought-provoking discussions. Whether you are seeking inspiration, practical tips, or just a good read, our platform is here to cater to your interests.
					Join us as we delve into a variety of topics, sharing ideas that spark conversation and encourage exploration. Your journey into a realm of informative and entertaining posts begins here.
				</motion.p>
				<section className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
					{_games?.length ? (
						_games?.map((game, index) => {
							if (index === _games.length - 1) return <GameCard key={index} game={game} ref={ref} />;
							return <GameCard key={index} game={game} />;
						})
					) : (
						<p className="font-bold">Loading Games...</p>
					)}
				</section>
			</div>
		</main>
	);
};

export default Page;
