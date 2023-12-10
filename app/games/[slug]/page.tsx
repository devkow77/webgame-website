import React from 'react';
import { colorRating } from '@/lib/functions';
import Image from 'next/image';
import { RoundedLink, ReviewForm } from '@/components/index';

type PlatformProps = {
	name: string;
	slug: string;
};

const handleGameDetails = async (slug: string) => {
	const response = await fetch(`${process.env.BASE_URL}/api/games/${slug}`, { next: { revalidate: 5 } });
	if (!response.ok) console.log(response);
	const data = await response.json();
	return data;
};

const Page = async ({ params }: { params: { slug: string } }) => {
	const { game } = await handleGameDetails(params.slug);

	return (
		<main>
			<div className="max-w-7xl mx-auto px-6">
				<h2 className="lg:text-lg mb-2">#game #{game?.slug}</h2>
				<h1 className="font-extrabold text-3xl lg:text-4xl mb-2 flex items-center flex-wrap gap-4">
					{game.title} <span className={`${colorRating(Number(game.globalrating))} px-4 py-2 rounded-2xl`}>{game.globalrating.toPrecision(2)}</span>
				</h1>
				<h3 className="font-semibold mb-6">🕛 {new Date(game?.released).toDateString()}</h3>
				<section className="w-full mb-12 flex flex-col md:flex-row justify-between gap-4">
					<div className="flex-1 rounded-2xl">
						<Image src={game?.headerImage} alt={game.title} width={1000} height={1000} className="object-cover object-center aspect-video rounded-2xl" />
					</div>
					<div className="flex-1 grid grid-cols-2 gap-4">
						{game.images.map((image: any, index: number) => (
							<Image key={index} src={image} alt={game.title} width={800} height={800} className="object-cover object-center aspect-video rounded-2xl" />
						))}
					</div>
				</section>
				<p className="opacity-80 leading-9 mb-6">{game?.description}</p>
				<h3 className="font-bold mb-6">Types / Developers / Platforms / Categories</h3>
				<section className="flex items-center gap-6 flex-wrap mb-6">
					{game.types.length ? (
						game.types.map(({ name, slug }: PlatformProps, index: number) => <RoundedLink key={index} name={name} slug={`/games/categories/${slug}`} color="bg-sky-700 hover:bg-sky-500" />)
					) : (
						<p className="font-bold">Loading Main Category...</p>
					)}
				</section>
				<section className="flex items-center gap-6 flex-wrap mb-6">
					{game.developers.length ? (
						game.developers.map(({ name, slug }: PlatformProps, index: number) => <RoundedLink key={index} name={name} slug={`/games/developers/${slug}`} color="bg-sky-500 hover:bg-sky-700" />)
					) : (
						<p className="font-bold">Loading Platforms...</p>
					)}
				</section>
				<section className="flex items-center gap-6 flex-wrap mb-6 ">
					{game.platforms.length ? (
						game.platforms.map(({ name, slug }: PlatformProps, index: number) => <RoundedLink key={index} name={name} slug={`/games/platforms/${slug}`} color="bg-gray-700 hover:bg-gray-500" />)
					) : (
						<p className="font-bold">Loading Platforms...</p>
					)}
				</section>
				<section className="flex items-center gap-6 flex-wrap mb-12">
					{game.categories.length ? game.categories.map((category: string, index: number) => <RoundedLink key={index} name={category} color="bg-gray-500" />) : <p className="font-bold">Loading Categories...</p>}
				</section>
				<section className="mb-12">
					<h3 className="font-bold mb-6 lg:mb-12">
						{game.title} Reviews ({game.reviews.length})
					</h3>
					<div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">
						{game.reviews.length ? (
							game.reviews.map((review: any) => (
								<div>
									<div className="flex items-center gap-4 flex-wrap mb-4">
										<div className="relative w-12 h-12 rounded-2xl">
											<Image src={review.avatar} alt="profile" width={300} height={300} className="absolute w-full h-full rounded-full" />
										</div>
										<div>
											<p>{review.name}</p>
											<p>{review.email}</p>
										</div>
										<div className={`${colorRating(review.rating)} w-full max-w-sm px-4 h-12 text-center rounded-2xl  font-bold leading-[3] sm:w-auto`}>{Number(review.rating).toPrecision(2)}</div>
									</div>
									<p className="text-sm leading-7 lg:text-base lg:leading-9">{review.content}</p>
								</div>
							))
						) : (
							<h3 className="font-bold -mt-6">There are no reviews at this time</h3>
						)}
					</div>
				</section>
				<ReviewForm id={game.id} />
			</div>
		</main>
	);
};

export default Page;
