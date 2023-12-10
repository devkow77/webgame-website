'use client';

import React, { useRef, useEffect } from 'react';
import { fetchGames, fixTitle } from '@/lib/functions';
import { useInfiniteQuery } from '@tanstack/react-query';
import { useIntersection } from '@mantine/hooks';
import { GameCard } from '@/components/index';

type GameProps = {
	released: string;
	slug: string;
	title: string;
	globalrating: number;
	headerImage: string;
};

const Page = ({ params }: { params: { slug: string } }) => {
	const { data, fetchNextPage } = useInfiniteQuery(
		['query'],
		async ({ pageParam = 1 }) => {
			const response = await fetchGames(`/api/games/developers/${params.slug}?page=${pageParam}`);
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
				<h3 className="lg:text-lg mb-2">#developer</h3>
				<h1 className="font-extrabold text-3xl lg:text-4xl mb-4">{_games?.length ? fixTitle(params.slug) : `${fixTitle(params.slug)} No Exist`}</h1>
				<p className="max-w-4xl opacity-80 leading-9 mb-6">
					{_games?.length
						? 'Welcome to our blog! Explore a world of insightful articles, engaging stories, and thought-provoking discussions. Whether you are seeking inspiration, practical tips, or just a good read, our platform is here to cater to your interests. Join us as we delve into a variety of topics, sharing ideas that spark conversation and encourage exploration. Your journey into a realm of informative and entertaining posts begins here.'
						: 'Im sorry, but the developer youve specified does not exist. To explore a list of all available developers, you can visit the /games/developers section on the website. This page provides a comprehensive directory of all registered developers and their associated information.'}
				</p>
				<section className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
					{_games?.length ? (
						_games?.map((game: GameProps, index: number) => {
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
