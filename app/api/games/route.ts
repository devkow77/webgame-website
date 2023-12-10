import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/prisma/client';
import { StatusCodes } from 'http-status-codes';

export async function GET(req: NextRequest) {
	const page: string = req.nextUrl.searchParams.get('page') || '';
	const filter: string = req.nextUrl.searchParams.get('filter') || 'all';

	switch (filter) {
		// platforms
		case 'pc': {
			const games = await prisma.game.findMany({
				skip: (Number(page) - 1) * 2,
				take: 2,
				where: {
					platforms: {
						some: {
							slug: {
								contains: 'pc',
							},
						},
					},
				},
			});

			return NextResponse.json(games, { status: StatusCodes.OK });
		}
		case 'playstation': {
			const games = await prisma.game.findMany({
				skip: (Number(page) - 1) * 2,
				take: 2,

				where: {
					platforms: {
						some: {
							slug: {
								contains: 'playstation',
							},
						},
					},
				},
			});
			return NextResponse.json(games, { status: StatusCodes.OK });
		}
		case 'x-box': {
			const games = await prisma.game.findMany({
				skip: (Number(page) - 1) * 2,
				take: 2,
				where: {
					platforms: {
						some: {
							slug: {
								contains: 'box',
							},
						},
					},
				},
			});
			return NextResponse.json(games, { status: StatusCodes.OK });
		}
		case 'nintendo-switch': {
			const games = await prisma.game.findMany({
				skip: (Number(page) - 1) * 2,
				take: 2,
				where: {
					platforms: {
						some: {
							slug: {
								contains: 'nitendo-switch',
							},
						},
					},
				},
			});
			return NextResponse.json(games, { status: StatusCodes.OK });
		}
		// sorted
		case 'best-to-worst': {
			const games = await prisma.game.findMany({
				skip: (Number(page) - 1) * 2,
				take: 2,
				orderBy: {
					globalrating: 'desc',
				},
			});
			return NextResponse.json(games, { status: StatusCodes.OK });
		}
		case 'newest': {
			const games = await prisma.game.findMany({
				skip: (Number(page) - 1) * 2,
				take: 2,
				orderBy: {
					released: 'desc',
				},
			});
			return NextResponse.json(games, { status: StatusCodes.OK });
		}
		case 'alphabetic': {
			const games = await prisma.game.findMany({
				skip: (Number(page) - 1) * 2,
				take: 2,
				orderBy: {
					title: 'asc',
				},
			});
			return NextResponse.json(games, { status: StatusCodes.OK });
		}
		case 'categories-alphabetic': {
			const games = await prisma.game.findMany({
				skip: (Number(page) - 1) * 2,
				take: 2,
				orderBy: {
					categories: 'asc',
				},
			});
			return NextResponse.json(games, { status: StatusCodes.OK });
		}
		// types
		case 'microsoft-windows': {
			const games = await prisma.game.findMany({
				skip: (Number(page) - 1) * 2,
				take: 2,
			});
			return NextResponse.json(games, { status: StatusCodes.OK });
		}
		default: {
			const games = await prisma.game.findMany({
				skip: (Number(page) - 1) * 2,
				take: 2,
			});
			return NextResponse.json(games, { status: StatusCodes.OK });
		}
	}
}

export async function POST(req: Request) {
	const { gameId, name, email, avatar, content, rating } = await req.json();

	const isReview = await prisma.review.findFirst({
		where: {
			gameId,
			email,
		},
	});

	if (!isReview) {
		const newReview = await prisma.review.create({
			data: {
				name,
				email,
				avatar,
				content,
				rating,
				gameId,
			},
		});

		return NextResponse.json(newReview, { status: StatusCodes.OK });
	}

	const updateReview = await prisma.review.update({
		where: {
			id: isReview.id,
			email,
		},
		data: {
			name,
			email,
			avatar,
			content,
			rating,
			gameId,
		},
	});

	console.log(updateReview);

	return NextResponse.json(updateReview, { status: StatusCodes.OK });
}
