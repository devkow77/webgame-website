import { NextResponse } from 'next/server';
import prisma from '@/prisma/client';

export async function GET() {
	try {
		const developers = await prisma.developer.findMany({});

		return NextResponse.json(developers, { status: 201 });
	} catch (error) {
		return NextResponse.json({ error }, { status: 401 });
	}
}
