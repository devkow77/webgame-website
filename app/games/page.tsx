'use client';

import { useState, useEffect, useRef } from 'react';
import { useIntersection } from '@mantine/hooks';
import { useInfiniteQuery } from '@tanstack/react-query';
import { fetchGames } from '@/lib/functions';
import { motion } from 'framer-motion';
import { GameCard, FilterGamesTable, RoundedLink } from '@/components/index';

type CategoriesProps = {
	name: string;
	slug: string;
};

export default function Page() {
	const [filter, setFilter] = useState<string>('all');
	const [categories, setCategories] = useState<CategoriesProps[]>([]);

	const { data, fetchNextPage } = useInfiniteQuery(
		['query', filter],
		async ({ pageParam = 1 }) => {
			const response = await fetchGames(`/api/games?page=${pageParam}&filter=${filter}`);
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

	useEffect(() => {
		fetch('/api/games/categories')
			.then((res) => res.json())
			.then((data) => setCategories(data))
			.catch((err) => console.log(err));
	}, []);

	return (
		<main>
			<div className="max-w-7xl mx-auto px-8">
				<motion.h3 className="lg:text-lg mb-2" initial={{ x: -50, opacity: 0 }} whileInView={{ x: 0, opacity: 0.8 }} transition={{ duration: 1 }} viewport={{ once: true }}>
					#games
				</motion.h3>
				<motion.h1 className="font-extrabold text-3xl lg:text-4xl mb-4" initial={{ x: -50, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ duration: 1 }} viewport={{ once: true }}>
					Games <span className="text-pink-500">Library</span>
				</motion.h1>
				<motion.p className="max-w-4xl opacity-80 leading-9 mb-6" initial={{ x: -50, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ duration: 1 }} viewport={{ once: true }}>
					This section is about video games, providing information and reviews about popular titles, their release dates, user ratings, and review counts. Users can add their favorite games, leave comments, and interact with other gaming
					enthusiasts.
				</motion.p>
				<section className="flex items-center gap-6 flex-wrap">
					{categories.length ? categories.map(({ name, slug }: CategoriesProps) => <RoundedLink name={name} slug={`/games/categories/${slug}`} color="bg-gray-700 hover:bg-pink-500" />) : <p className="font-semibold">Loading Categories...</p>}
				</section>
				<FilterGamesTable setFilter={setFilter} />
				<h2 className="font-bold text-center text-lg">
					Showing <span className="text-pink-500">{filter}</span>
				</h2>
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
}
