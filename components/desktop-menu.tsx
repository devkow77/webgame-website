'use client';

import { useState, useEffect, forwardRef } from 'react';
import Link from 'next/link';

import { cn } from '@/lib/utils';
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle } from '@/components/ui/navigation-menu';

const components: { title: string; href: string; description: string }[] = [
	{
		title: 'All blog posts',
		href: '/blog',
		description: 'This is a section featuring all blog posts.',
	},
	{
		title: 'Posts created by author',
		href: '/blog/authors',
		description: 'These are blog posts by a specific author.',
	},
	{
		title: 'Posts about a given category',
		href: '/blog/categories',
		description: 'Section about posts by a specific category.',
	},
	{
		title: 'Posts about world records',
		href: '/blog/categories/records',
		description: 'Section about amazing records which you should know',
	},
];

export function DesktopMenu() {
	const [mounted, setMounted] = useState<boolean>(false);
	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) {
		return null;
	}
	return (
		<NavigationMenu>
			<NavigationMenuList>
				{/* Home */}
				<NavigationMenuItem>
					<Link href="/" legacyBehavior passHref>
						<NavigationMenuLink className={navigationMenuTriggerStyle()}>Home</NavigationMenuLink>
					</Link>
				</NavigationMenuItem>
				{/* About us */}
				<NavigationMenuItem>
					<Link href="/#about-us" legacyBehavior passHref>
						<NavigationMenuLink className={navigationMenuTriggerStyle()}>About us</NavigationMenuLink>
					</Link>
				</NavigationMenuItem>
				{/* Games */}
				<NavigationMenuItem>
					<NavigationMenuTrigger>Games</NavigationMenuTrigger>
					<NavigationMenuContent>
						<ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
							<li className="row-span-3">
								<NavigationMenuLink asChild>
									<a className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md hover:bg-gray-200 dark:hover:bg-gray-700" href="/games">
										<div className="mb-2 mt-4 text-lg font-medium">Games</div>
										<p className="text-sm leading-tight text-muted-foreground">This is a bookmark with all the games.</p>
									</a>
								</NavigationMenuLink>
							</li>
							<ListItem href="/games/categories" title="Categories" className="hover:bg-gray-200 dark:hover:bg-gray-700">
								This is a tab with all the categories.
							</ListItem>
							<ListItem href="/games/developers" title="Developers" className="hover:bg-gray-200 dark:hover:bg-gray-700">
								This is a section featuring the developers.
							</ListItem>
							<ListItem href="/games/platforms" title="Platforms" className=" hover:bg-gray-200 dark:hover:bg-gray-700">
								Games available on a specific platform.
							</ListItem>
						</ul>
					</NavigationMenuContent>
				</NavigationMenuItem>
				<NavigationMenuItem>
					<NavigationMenuTrigger>Blog</NavigationMenuTrigger>
					<NavigationMenuContent>
						<ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
							{components.map((component) => (
								<ListItem key={component.title} title={component.title} href={component.href} className="hover:bg-gray-200 dark:hover:bg-gray-700">
									{component.description}
								</ListItem>
							))}
						</ul>
					</NavigationMenuContent>
				</NavigationMenuItem>
				{/* Faq */}
				<NavigationMenuItem>
					<Link href="/faq" legacyBehavior passHref>
						<NavigationMenuLink className={navigationMenuTriggerStyle()}>Faq</NavigationMenuLink>
					</Link>
				</NavigationMenuItem>
				{/* Contact */}
				<NavigationMenuItem>
					<Link href="/contact" legacyBehavior passHref>
						<NavigationMenuLink className={navigationMenuTriggerStyle()}>Contact</NavigationMenuLink>
					</Link>
				</NavigationMenuItem>
			</NavigationMenuList>
		</NavigationMenu>
	);
}

const ListItem = forwardRef<React.ElementRef<'a'>, React.ComponentPropsWithoutRef<'a'>>(({ className, title, children, ...props }, ref) => {
	return (
		<li>
			<NavigationMenuLink asChild>
				<a
					ref={ref}
					className={cn('block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground', className)}
					{...props}
				>
					<div className="text-sm font-medium leading-none">{title}</div>
					<p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{children}</p>
				</a>
			</NavigationMenuLink>
		</li>
	);
});
ListItem.displayName = 'ListItem';
