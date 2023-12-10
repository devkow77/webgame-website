import React from 'react';
import { Body, Html, Head, Container, Tailwind, Text, Button, Heading } from '@react-email/components';

const EmailTemplate = () => {
	return (
		<Html>
			<Head />
			<Tailwind>
				<Body className="bg-white my-12 mx-auto font-sans">
					<Container className="p-8 rounded-lg shadow-lg">
						<Heading className="text-xl pt-4">Autoresponse from webgame ✌️</Heading>
						<Text className="opacity-80">Thank you for getting in touch! Your message has been received and I'll get back to you as soon as possible. I appreciate your interest and look forward to connecting with you</Text>
						<Button href="http://localhost:3000" className="px-6 py-2 bg-sky-500 text-white rounded-2xl">
							Back To Website
						</Button>
					</Container>
				</Body>
			</Tailwind>
		</Html>
	);
};

export default EmailTemplate;
