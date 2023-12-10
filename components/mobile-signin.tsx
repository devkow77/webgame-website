import React from 'react';
import { useSession, signIn, signOut } from 'next-auth/react';
import { Button } from './ui/button';
import { motion } from 'framer-motion';
import Image from 'next/image';

const MobileSignin = () => {
	const { data: session } = useSession();

	if (session && session.user) {
		return (
			<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2, duration: 1 }}>
				<div className="flex items-center gap-6 text-sm mb-6">
					<Image src={session.user.image || ''} alt="profile image" width={40} height={40} className="object-cover object-center rounded-full" />
					<div>
						<h1 className="font-bold">{session.user.name}</h1>
						<h2 className="font-medium">{session.user.email}</h2>
					</div>
				</div>
				<Button onClick={() => signOut()} className="w-full bg-sky-500 hover:bg-sky-700">
					Sign Out
				</Button>
			</motion.div>
		);
	}

	return (
		<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2, duration: 1 }}>
			<Button onClick={() => signIn()} className="w-full bg-sky-500 hover:bg-sky-700">
				Sign In
			</Button>
		</motion.div>
	);
};

export default MobileSignin;
