import React from 'react';
import { FaWindows, FaPlaystation, FaXbox, FaPlus, FaHeart, FaCalendarDay, FaSortAlphaDown, FaGamepad, FaPager } from 'react-icons/fa';
import { BsNintendoSwitch } from 'react-icons/bs';
import Link from 'next/link';

type FilterGamesTableProps = {
	setFilter: (filter: string) => void;
};

const FilterGamesTable = ({ setFilter }: FilterGamesTableProps) => {
	return (
		<section className="my-12 space-y-6 md:space-y-0 md:flex items-start gap-12">
			<div>
				<h3 className="font-bold mb-4">Platforms</h3>
				<ul className="leading-9">
					<li onClick={() => setFilter('microsoft-windows')} className="flex items-center gap-4 cursor-pointer hover:text-sky-500">
						<FaWindows />
						<p>Microsoft Windows (PC)</p>
					</li>
					<li onClick={() => setFilter('playstation')} className="flex items-center gap-4 cursor-pointer hover:text-sky-500">
						<FaPlaystation />
						<p>Playstation</p>
					</li>
					<li onClick={() => setFilter('x-box')} className="flex items-center gap-4 cursor-pointer hover:text-sky-500">
						<FaXbox />
						<p>Xbox</p>
					</li>
					<li onClick={() => setFilter('nintendo-switch')} className="flex items-center gap-4 cursor-pointer hover:text-sky-500">
						<BsNintendoSwitch />
						<p>Nitendo Switch</p>
					</li>
					<Link href="/games/platforms">
						<li className="flex items-center gap-4 cursor-pointer hover:text-sky-500">
							<FaPlus />
							<p>Go To All Platforms</p>
						</li>
					</Link>
				</ul>
			</div>
			<div>
				<h3 className="font-bold mb-4">Sorted</h3>
				<ul className="leading-9">
					<li onClick={() => setFilter('best-to-worst')} className="flex items-center gap-4 cursor-pointer hover:text-sky-500">
						<FaHeart />
						<p>From Best to Worst</p>
					</li>
					<li onClick={() => setFilter('newest')} className="flex items-center gap-4 cursor-pointer hover:text-sky-500">
						<FaCalendarDay />
						<p>From The Newest</p>
					</li>
					<li onClick={() => setFilter('alphabetic')} className="flex items-center gap-4 cursor-pointer hover:text-sky-500">
						<FaSortAlphaDown />
						<p>From A to Z</p>
					</li>
					<li onClick={() => setFilter('categories-alphabetic')} className="flex items-center gap-4 cursor-pointer hover:text-sky-500">
						<FaSortAlphaDown />
						<p>Categories Alphabetic</p>
					</li>
				</ul>
			</div>
			<div>
				<h3 className="font-bold mb-4">Types</h3>
				<ul className="leading-9">
					<li onClick={() => setFilter('all')} className="flex items-center gap-4 cursor-pointer hover:text-sky-500">
						<FaGamepad />
						<p>All Games</p>
					</li>
					<Link href={'/games/categories'}>
						<li className="flex items-center gap-4 cursor-pointer hover:text-sky-500">
							<FaPager />
							<p>Go To Categories Page</p>
						</li>
					</Link>
				</ul>
			</div>
		</section>
	);
};

export default FilterGamesTable;
