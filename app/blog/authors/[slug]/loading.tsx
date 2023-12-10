import React from 'react';
import { Skeleton } from '@/components/ui/skeleton';

const Loading = () => {
	return (
		<section>
			<div className="max-w-7xl mx-auto px-8">
				<Skeleton className="w-16 h-6 mb-4"></Skeleton>
				<section className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between lg:gap-12">
					<div>
						<Skeleton className="w-[400px] h-14 mb-4"></Skeleton>
						<Skeleton className="w-[600px] h-80 mb-4"></Skeleton>
					</div>
					<Skeleton className="w-full h-80 mb-12"></Skeleton>
				</section>
				<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
					{Array.from({ length: 4 }).map(() => (
						<Skeleton className="w-full h-28 rounded-2xl"></Skeleton>
					))}
				</div>
			</div>
		</section>
	);
};

export default Loading;
