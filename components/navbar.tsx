'use client';

import React, { useState } from 'react';
import { ThemeToggle, HamburgerMenu, DesktopMenu, MobileMenu, DesktopSignin } from '@/components/index';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import { motion } from 'framer-motion';
import Link from 'next/link';

const Navbar = () => {
	const [toggle, setToggle] = useState<boolean>(false);
	const matches = useMediaQuery('(min-width: 1280px)');

	return (
		<motion.nav initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} viewport={{ once: true }} className="w-full max-w-7xl mx-auto flex items-center justify-between flex-wrap py-8 px-6 mb-16">
			<h1 className="font-bold text-lg">
				<Link href="/">webgame</Link>
			</h1>
			{matches ? <DesktopMenu /> : null}
			<DesktopSignin />
			<div className="flex items-center gap-6">
				<ThemeToggle />
				<HamburgerMenu setToggle={setToggle} toggle={toggle} />
			</div>
			{toggle && !matches ? <MobileMenu /> : null}
		</motion.nav>
	);
};

export default Navbar;
