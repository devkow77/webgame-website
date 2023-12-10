import { NextResponse } from 'next/server';
import prisma from '@/prisma/client';

export async function GET() {
	try {
		const categories = await prisma.type.findMany();

		return NextResponse.json(categories, { status: 201 });
	} catch (error) {
		return NextResponse.json({ error }, { status: 400 });
	}
}
