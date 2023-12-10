import React from 'react';
import Link from 'next/link';

type RoundedLinkProps = {
	name: string;
	slug?: string;
	color: string;
};

const RoundedLink = ({ name, slug, color }: RoundedLinkProps) => {
	return (
		<Link href={slug ? slug : ''} className={`${color} px-4 py-2 rounded-2xl duration-200 cursor-pointer text-white`}>
			{name}
		</Link>
	);
};

export default RoundedLink;
