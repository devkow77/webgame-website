'use client';

import React from 'react';
import { Player } from '@lottiefiles/react-lottie-player';
import { ContactForm } from '@/components/index';

const Page = () => {
	return (
		<main>
			<div className="max-w-7xl mx-auto px-8 flex flex-col items-start">
				<h3 className="lg:text-lg mb-2">#contact</h3>
				<h2 className="font-extrabold text-3xl lg:text-4xl mb-4">
					Contact Form <br /> <span className="text-green-500">Ask About Everything</span>
				</h2>
				<p className="max-w-4xl opacity-80 leading-9 mb-6">
					Connect with us! Drop us a message using the contact form provided, or get in touch through our email address: info@ywebgame.com. We look forward to hearing from you and will do our best to respond promptly."
				</p>
				<Player autoplay loop src="contact-lottie.json" style={{ height: 'auto', width: 'auto' }} className="max-w-sm" />
				<ContactForm />
			</div>
		</main>
	);
};

export default Page;
