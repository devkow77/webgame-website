'use client';

import { useCountUp } from 'react-countup';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { FaqAccordionShort } from '@/components/index';
import { useRouter } from 'next/navigation';

export default function Home() {
	useCountUp({ ref: 'first-counter', end: 20, duration: 5, prefix: '+', suffix: 'K' });
	useCountUp({ ref: 'second-counter', end: 10, duration: 3, suffix: 'M' });
	useCountUp({ ref: 'third-counter', end: 126000, prefix: '+', duration: 5 });
	const router = useRouter();

	return (
		<main>
			<div className="max-w-7xl mx-auto">
				<section className="relative px-8 pb-8">
					<motion.h3 className="text-base lg:text-lg mb-2" initial={{ x: -50, opacity: 0 }} whileInView={{ x: 0, opacity: 0.8 }} transition={{ duration: 1 }} viewport={{ once: true }}>
						#home
					</motion.h3>
					<motion.h1 className="font-extrabold text-4xl lg:text-6xl mb-4" initial={{ x: -50, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ duration: 1 }} viewport={{ once: true }}>
						Web<span className="text-sky-500">game</span>
					</motion.h1>
					<motion.p className="max-w-4xl opacity-80 leading-9 mb-12" initial={{ x: -50, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ duration: 1 }} viewport={{ once: true }}>
						Welcome to our exciting game website! Here, gaming enthusiasts of all ages and interests can immerse themselves in a world of endless entertainment. With a vast array of genres, from action-packed adventures to brain-teasing puzzles,
						our platform offers something for everyone. Whether you're a seasoned gamer looking for a new challenge or a casual player looking to unwind, you'll find a treasure trove of games to explore. Join our vibrant gaming community and
						embark on epic journeys, compete with friends, and discover your next favorite game – all on our game website!
					</motion.p>
					<motion.section initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }} className="flex items-center flex-wrap gap-12 text-center" viewport={{ once: true }}>
						<div>
							<span id="first-counter" className="font-bold text-2xl lg:text-3xl" />
							<h3>Total Games</h3>
						</div>
						<div>
							<span id="second-counter" className="font-bold text-2xl lg:text-3xl" />
							<h3>Users</h3>
						</div>
						<div>
							<span id="third-counter" className="font-bold text-2xl lg:text-3xl" />
							<h3>Reviews</h3>
						</div>
					</motion.section>
					<motion.div initial={{ scaleY: 0 }} whileInView={{ scaleY: 1, originY: 'top' }} transition={{ duration: 0.5 }} className="absolute w-1.5 h-full top-0 left-0 home-border-one" />
					<motion.div initial={{ scaleX: 0 }} whileInView={{ scaleX: 1, originX: 'left' }} transition={{ duration: 0.5, delay: 0.5 }} className="absolute w-full h-1.5 bottom-0 left-0 home-border-two" />
				</section>
				{/* about us */}
				<motion.section className="relative flex flex-col items-end p-8 bg-pink-500 bg-opacity-5" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 2 }} viewport={{ once: true }}>
					<motion.h3 className="lg:text-lg mb-2" initial={{ x: 50, opacity: 0 }} whileInView={{ x: 0, opacity: 0.8 }} transition={{ duration: 1 }} viewport={{ once: true }}>
						#about-us
					</motion.h3>
					<motion.h2 className="font-extrabold text-3xl lg:text-4xl text-right mb-4" initial={{ x: 50, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ duration: 1 }} viewport={{ once: true }}>
						<span className="text-pink-500">Something</span> About Us
					</motion.h2>
					<motion.p className="max-w-4xl opacity-80 leading-9 mb-6 text-right" initial={{ x: 50, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ duration: 1 }} viewport={{ once: true }}>
						At "Section About Us," we take pride in our commitment to providing top-notch gaming experiences. Our dedicated team of enthusiasts works tirelessly to curate a diverse selection of games and ensure a seamless user experience. We're
						passionate about gaming, and we're here to make your journey through our website an unforgettable one.
					</motion.p>
					<div className="max-w-4xl grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mb-6">
						<Link href="/games/fortnite">
							<Image src="/fornite.jpg" alt="fortnite image" width={600} height={600} className="w-full h-full object-cover object-center rounded-2xl cursor-pointer opacity-100 dark:opacity-70 dark:hover:opacity-100 duration-200" />
						</Link>
						<Link href="/games/god-of-war">
							<Image src="/god-of-war.jpg" alt="god of war image" width={600} height={600} className=" w-full h-full object-cover object-center rounded-2xl cursor-pointer opacity-100 dark:opacity-70 dark:hover:opacity-100 duration-200" />
						</Link>
						<Link href="/games/nfs-most-wanted-2012">
							<Image
								src="/most-wanted-2012.webp"
								alt="nfs most wanted 2012 image"
								width={600}
								height={600}
								className=" w-full h-full object-cover object-center rounded-2xl cursor-pointer opacity-100 dark:opacity-70 dark:hover:opacity-100 duration-200"
							/>
						</Link>
						<Link href="/games/cyberpunk-2077">
							<Image src="/cyberpunk.jpg" alt="cyberpunk image" width={600} height={600} className="w-full h-full object-cover object-center rounded-2xl cursor-pointer opacity-100 dark:opacity-70 dark:hover:opacity-100 duration-200" />
						</Link>
					</div>
					<Button className="bg-pink-500 hover:bg-pink-700" onClick={() => router.push('/games')}>
						Go To Games Page
					</Button>
					<motion.p className="max-w-4xl opacity-80 leading-9 my-6 text-right" initial={{ x: 50, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ duration: 1 }} viewport={{ once: true }}>
						Explore our blog forum for in-depth articles, news, and insights into the gaming world. Our expert bloggers provide valuable information, game reviews, and industry updates, making it the perfect place to stay informed and engaged in
						the gaming universe. Join the discussion and keep your gaming knowledge up-to-date through our blog forum.
					</motion.p>
					<Button className="bg-pink-500 hover:bg-pink-700" onClick={() => router.push('/blog')}>
						Check Blog
					</Button>
					<motion.div initial={{ scaleY: 0 }} whileInView={{ scaleY: 1, originY: 'top' }} transition={{ duration: 0.5 }} className="absolute w-1.5 h-full top-0 right-0 aboutus-border-one" />
					<motion.div initial={{ scaleX: 0 }} whileInView={{ scaleX: 1, originX: 'right' }} transition={{ duration: 0.5, delay: 0.5 }} className="absolute w-full h-1.5 bottom-0 right-0 aboutus-border-two" />
				</motion.section>
				{/* faq & contact */}
				<motion.section className="relative p-8 bg-green-500 bg-opacity-5" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 2 }} viewport={{ once: true }}>
					<motion.h3 className="lg:text-lg mb-2" initial={{ x: -50, opacity: 0 }} whileInView={{ x: 0, opacity: 0.8 }} transition={{ duration: 1 }} viewport={{ once: true }}>
						#faq #contact
					</motion.h3>
					<motion.h2 className="font-extrabold text-3xl lg:text-4xl mb-4" initial={{ x: -50, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ duration: 1 }} viewport={{ once: true }}>
						<span className="text-green-500">Most Frequently</span> Asked Questions & Contact
					</motion.h2>
					<motion.p className="max-w-4xl opacity-80 leading-9 mb-6" initial={{ x: -50, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ duration: 1 }} viewport={{ once: true }}>
						Our FAQ section is your go-to resource for quick answers to common questions, while our Contact section is the gateway to reach out to our support team for any specific inquiries or assistance you may need. We're here to help and
						provide you with the information you're looking for.
					</motion.p>
					<FaqAccordionShort />
					<Button className="bg-green-500 hover:bg-green-700" onClick={() => router.push('/faq')}>
						Show More Faq Questions
					</Button>
					<motion.p className="max-w-4xl opacity-80 leading-9 my-6" initial={{ x: -50, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ duration: 1 }} viewport={{ once: true }}>
						In our Contact section, you'll find an easy way to reach out to our dedicated support team. Whether you have technical issues, feedback, or any other inquiries, we're here to assist you promptly and ensure your gaming experience is
						smooth and enjoyable.
					</motion.p>
					<Button className="bg-green-500 hover:bg-green-700" onClick={() => router.push('/contact')}>
						Contact Me
					</Button>
					<motion.div initial={{ scaleY: 0 }} whileInView={{ scaleY: 1, originY: 'top' }} transition={{ duration: 0.5 }} className="absolute w-1.5 h-full top-0 left-0 faq-border-one" />
					<motion.div initial={{ scaleX: 0 }} whileInView={{ scaleX: 1, originX: 'left' }} transition={{ duration: 0.5, delay: 0.5 }} className="absolute w-full h-1.5 bottom-0 left-0 faq-border-two" />
				</motion.section>
			</div>
		</main>
	);
}
