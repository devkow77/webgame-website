'use client';

import React from 'react';
import { Button } from './ui/button';
import { useSession, signIn, signOut } from 'next-auth/react';
import Image from 'next/image';

const DesktopSignin = () => {
	const { data: session } = useSession();

	if (session && session.user) {
		return (
			<div className="hidden xl:flex items-center gap-4">
				{session.user ? <Image src={session.user.image || ''} alt={session.user.name || ''} width={40} height={40} className="object-center object-cover rounded-full" /> : null}
				<p className="font-medium">
					Logged as <br /> <span className="font-bold ">{session.user.name}</span>
				</p>
				<Button onClick={() => signOut()} className="bg-sky-500 hover:bg-sky-700 ml-4">
					Sign Out
				</Button>
			</div>
		);
	}

	return (
		<Button onClick={() => signIn()} className="hidden xl:block bg-sky-500 hover:bg-sky-700">
			Sign In
		</Button>
	);
};

export default DesktopSignin;
