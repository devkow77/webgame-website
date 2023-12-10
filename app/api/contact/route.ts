import { NextResponse } from 'next/server';
import EmailTemplate from '@/components/emails/email-template';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
	const { email, message } = await req.json();

	try {
		const newEmail = await resend.sendEmail({
			from: 'onboarding@resend.dev',
			to: 'kowalsky429@gmail.com',
			subject: 'New message from webgame',
			text: `Email: ${email} Message: ${message}`,
		});

		const autoresponse = await resend.sendEmail({
			from: 'onboarding@resend.dev',
			to: email,
			subject: 'Thanks for contact ✌️',
			react: EmailTemplate(),
		});

		return NextResponse.json({ newEmail, autoresponse }, { status: 201 });
	} catch (error) {
		return NextResponse.json(error);
	}
}
