import { motion } from 'framer-motion';
import { Dispatch, SetStateAction } from 'react';

const HamburgerMenu = ({ setToggle, toggle }: { setToggle: Dispatch<SetStateAction<boolean>>; toggle: boolean }) => {
	return (
		<div onClick={() => setToggle((prev) => !prev)} className="space-y-1.5 cursor-pointer z-50 xl:hidden">
			<motion.span animate={{ rotateZ: toggle ? 45 : 0, y: toggle ? 8 : 0 }} className="block w-6 h-0.5 bg-white"></motion.span>
			<motion.span animate={{ width: toggle ? 0 : 16 }} className="block w-4 h-0.5 bg-white"></motion.span>
			<motion.span animate={{ rotateZ: toggle ? -45 : 0, y: toggle ? -8 : 0 }} className="block w-6 h-0.5 bg-white"></motion.span>
		</div>
	);
};

export default HamburgerMenu;
