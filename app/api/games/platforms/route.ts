import { NextResponse } from 'next/server';
import prisma from '@/prisma/client';

export async function GET() {
	try {
		const platforms = await prisma.platform.findMany();

		return NextResponse.json(platforms, { status: 201 });
	} catch (error) {
		return NextResponse.json({ error }, { status: 401 });
	}
}
