'use client';

import React from 'react';
import Link from 'next/link';
import { FaFacebookF, FaInstagram, FaMailBulk } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Footer = () => {
	return (
		<motion.footer initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 2 }} viewport={{ once: true }}>
			<div className="w-full max-w-7xl mx-auto px-8 pt-8 mt-12 border-t-2 border-gray-400 text-gray-700 dark:text-white dark:border-gray-700 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
				<section>
					<h2 className="font-bold text-lg mb-4">webgame.com</h2>
					<p className="leading-9">
						Welcome to our gaming website, your one-stop destination for all things gaming! Here, you'll find a wide range of game reviews, the latest gaming news, and helpful guides to improve your gaming skills. Join our vibrant gaming
						community and dive into the exciting world of video games!
					</p>
				</section>
				<section className="md:text-right">
					<h2 className="font-bold text-lg mb-4">Sections</h2>
					<div className="leading-9">
						<Link href="/" className="hover:text-sky-500">
							<p>Home</p>
						</Link>
						<Link href="/#about-us" className="hover:text-sky-500">
							<p>About us</p>
						</Link>
						<Link href="/offer" className="hover:text-sky-500">
							<p>Job offer</p>
						</Link>
						<Link href="/blog" className="hover:text-sky-500">
							<p>Blog</p>
						</Link>
						<Link href="/#faq" className="hover:text-sky-500">
							<p>Faq</p>
						</Link>
						<Link href="/contact" className="hover:text-sky-500">
							<p>Contact</p>
						</Link>
					</div>
				</section>
				<section className="lg:text-right">
					<h2 className="font-bold text-lg mb-4">Contact</h2>
					<div className="leading-9">
						<div className="flex items-center lg:justify-end gap-4 hover:text-sky-500">
							<FaMailBulk className="scale-110" />
							<Link href={'/'}>webgame@contact.com</Link>
						</div>
						<div className="flex items-center lg:justify-end gap-4 hover:text-sky-500">
							<FaFacebookF className="scale-110" />
							<Link href={'/'}>
								<p>webgame</p>
							</Link>
						</div>
						<div className="flex items-center lg:justify-end gap-4 hover:text-sky-500">
							<FaInstagram className="scale-110" />
							<Link href={'/'}>
								<p>webgameinsta</p>
							</Link>
						</div>
					</div>
				</section>
			</div>
			<div className="mt-6 px-8 py-6 bg-black bg-opacity-10 dark:bg-gray-800 text-center xl:rounded-2xl xl:max-w-7xl xl:mx-auto xl:mb-6 xl:mt-12">
				&copy; Website created by:{' '}
				<Link href="https://github.com/devkow77" className="font-bold">
					devkow77
				</Link>{' '}
				All rights reserved, created in August 2023.
			</div>
		</motion.footer>
	);
};

export default Footer;
