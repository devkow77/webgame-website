import { NextResponse } from 'next/server';
import prisma from '@/prisma/client';

export async function GET(req: Request, { params }: { params: { slug: string } }) {
	try {
		const game = await prisma.game.findUnique({
			where: {
				slug: params.slug,
			},
			include: {
				developers: true,
				types: true,
				platforms: true,
				reviews: true,
			},
		});

		return NextResponse.json({ game }, { status: 201 });
	} catch (error) {
		return NextResponse.json({ error }, { status: 400 });
	}
}
