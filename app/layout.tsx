import './global.css';
import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import { Navbar } from './components/nav';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import Footer from './components/footer';

export const metadata: Metadata = {
	title: {
		default: 'Joseph Yu',
		template: '%s | Joseph Yu',
	},
	description: 'Joseph Yu Portfolio.',
	openGraph: {
		title: 'Joseph Yu Portfolio',
		description: 'This is Joseph Yu Portfolio.',
		siteName: 'Joseph Yu Portfolio',
		locale: 'en_US',
		type: 'website',
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1,
		},
	},
};

const cx = (...classes) => classes.filter(Boolean).join(' ');

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html
			lang="en"
			className={cx(
				'dark text-black bg-white dark:text-white dark:bg-black',
				GeistSans.variable,
				GeistMono.variable
			)}
		>
			<body className="antialiased max-w-3xl mx-4 mt-8 lg:mx-auto overflow-y:auto">
				<main className="flex-auto min-w-0 mt-6 flex flex-col px-2 space-y-8 md:px-0">
					<Navbar />
					{children}
					<Footer />
					<Analytics />
					<SpeedInsights />
				</main>
			</body>
		</html>
	);
}
