'use client';

import './globals.css';
import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ThemeProvider, Navbar, Footer } from '@/components/index';
import { SessionProvider } from 'next-auth/react';

const montserrat = Montserrat({ subsets: ['latin'] });

const queryClient = new QueryClient();

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body className={`${montserrat.className} dark:bg-gray-900 dark:text-white bg-[#f2f7f7] text-gray-700`}>
				<QueryClientProvider client={queryClient}>
					<SessionProvider>
						<ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
							<Navbar />
							{children}
							<Footer />
						</ThemeProvider>
					</SessionProvider>
				</QueryClientProvider>
			</body>
		</html>
	);
}
