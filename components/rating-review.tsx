'use client';

import React, { useState } from 'react';
import { AiFillLike, AiFillDislike } from 'react-icons/ai';
import { useSession } from 'next-auth/react';

type initialStateProps = {
	like: boolean;
	dislike: boolean;
};

const initialState = {
	like: false,
	dislike: false,
};

function RatingReview({ slug, reviewId, likeId, unlikeId }: { slug: string; reviewId: number; likeId: number; unlikeId: number }) {
	const [state, setState] = useState<initialStateProps>(initialState);
	const { data: session } = useSession();

	const handleLikeClick = () => {
		setState((prevState) => ({
			like: !prevState.like,
			dislike: false,
		}));

		fetch(`/api/games/${slug}`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				reviewId: reviewId,
				likeId: likeId,
				email: session?.user?.email,
				status: state,
			}),
		})
			.then((res) => res.json())
			.then((data) => console.log(`FETCH RESPONSE: ${JSON.stringify(data)}`))
			.catch((err) => console.log(`FETCH ERROR: ${err}`))
			.finally(() => console.log('FETCHING HAS BEEN DONE'));
	};

	const handleDislikeClick = () => {
		setState((prevState) => ({
			like: false,
			dislike: !prevState.dislike,
		}));
	};

	return (
		<section className="flex gap-2">
			<div className="flex gap-2">
				<AiFillLike onClick={handleLikeClick} className={`${state.like ? 'text-green-500' : null} scale-125 cursor-pointer`} />
				<p>2</p>
			</div>
			<div className="flex gap-2 ">
				<AiFillDislike onClick={handleDislikeClick} className={`${state.dislike ? 'text-red-500' : null} scale-125 cursor-pointer`} />
				<p>1</p>
			</div>
		</section>
	);
}

export default RatingReview;
