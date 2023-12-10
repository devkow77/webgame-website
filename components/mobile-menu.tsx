'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { MobileSignin } from '@/components/index';

const menuMotion = {
	visible: {
		opacity: 1,
		transition: {
			when: 'beforeChildren',
			staggerChildren: 0.2,
		},
	},
	hidden: {
		opacity: 0,
	},
};

const itemMotion = {
	visible: {
		opacity: 1,
		x: 0,
	},
	hidden: {
		opacity: 0,
		x: -100,
	},
};

const MobileMenu = () => {
	return (
		<motion.div variants={menuMotion} animate="visible" initial="hidden" className="fixed top-0 left-0 w-screen h-screen bg-gray-900 z-40 flex items-center justify-center">
			<div className="flex flex-col gap-8 font-semibold text-lg">
				<Link href={'/'}>
					<motion.p variants={itemMotion}>Home</motion.p>
				</Link>
				<Link href={'/about-us'}>
					<motion.p variants={itemMotion}>About us</motion.p>
				</Link>
				<Link href={'/'}>
					<motion.p variants={itemMotion}>Components</motion.p>
				</Link>
				<Link href={'/blog'}>
					<motion.p variants={itemMotion}>Blog</motion.p>
				</Link>
				<Link href={'/contact'}>
					<motion.p variants={itemMotion}>Contact</motion.p>
				</Link>
				<MobileSignin />
			</div>
		</motion.div>
	);
};

export default MobileMenu;
