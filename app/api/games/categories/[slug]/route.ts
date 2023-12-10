import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/prisma/client';

export async function GET(req: NextRequest, { params }: { params: { slug: string } }) {
	const page: string = req.nextUrl.searchParams.get('page') || '';

	try {
		const games = await prisma.game.findMany({
			skip: (Number(page) - 1) * 2,
			take: 2,
			where: {
				types: {
					some: {
						slug: params.slug,
					},
				},
			},
		});

		return NextResponse.json(games, { status: 201 });
	} catch (error) {
		return NextResponse.json({ error }, { status: 401 });
	}
}
