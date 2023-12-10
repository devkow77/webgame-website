import React, { forwardRef, Ref } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

type GameProps = {
	released: string;
	slug: string;
	title: string;
	globalrating: number;
	headerImage: string;
};

const colorRating = (rate: number) => {
	if (rate > 9.5) return 'best-games';
	if (rate <= 9.5 && rate >= 9) return 'nice-games';
	if (rate < 9 && rate > 7.5) return 'good-games';
	if (rate <= 7.5 && rate > 4.5) return 'medium-games';
	else return 'worst-games';
};

const GameCard = forwardRef(({ game }: { game: GameProps }, ref: Ref<HTMLElement>) => {
	return (
		<motion.article ref={ref} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 2 }} viewport={{ once: true }}>
			<Link href={`/games/${game.slug}`}>
				<div className="aspect-video relative rounded-2xl mb-4 overflow-hidden cursor-pointer w-full h-40 bg-zinc-700">
					<Image src={game.headerImage} alt={game.title} width={500} height={500} className="absolute w-full h-full object-cover object-center rounded-2xl hover:scale-125 duration-500" />
				</div>
				<div>
					<h2 className="font-bold">{game.title}</h2>
					<p>{new Date(game.released).toDateString()}</p>
					<p className={`${colorRating(game.globalrating)} px-2 py-1 rounded-2xl text-center mt-2`}>rating: {Number(game.globalrating).toPrecision(2)}</p>
				</div>
			</Link>
		</motion.article>
	);
});

export default GameCard;
