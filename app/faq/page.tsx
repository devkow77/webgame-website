'use client';

import React from 'react';
import { FaqAccordionLong } from '@/components/index';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';

const Page = () => {
	const router = useRouter();
	return (
		<main>
			<div className="max-w-7xl mx-auto px-8">
				<h3 className="lg:text-lg mb-2">#faq</h3>
				<h2 className="font-extrabold text-3xl lg:text-4xl mb-4">
					Faq Section <span className="text-green-500">With All Questions</span>
				</h2>
				<p className="max-w-4xl opacity-80 leading-9 mb-6">
					This page is dedicated to providing insightful and engaging blog content on a wide range of topics. From practical advice to thought-provoking insights, readers can expect to find valuable information and diverse perspectives. Whether
					you're seeking tips, inspiration, or simply a good read, this blog aims to cater to a diverse audience with its varied and informative posts.
				</p>
				<FaqAccordionLong />
				<p className="max-w-4xl opacity-80 leading-9 mb-6">If above questions were not enough to satisfy your curiosity we recommend go to the contact section by click button below</p>
				<Button onClick={() => router.push('/contact')} className="bg-green-500 hover:bg-green-700">
					Contact Page
				</Button>
			</div>
		</main>
	);
};

export default Page;
