import React from 'react';
import { Skeleton } from '@/components/ui/skeleton';

const Loading = () => {
	return (
		<section>
			<div className="max-w-7xl mx-auto px-8">
				<Skeleton className="w-16 h-6 mb-4"></Skeleton>
				<Skeleton className="w-[600px] h-14 mb-4"></Skeleton>
				<Skeleton className="w-[600px] h-36 mb-4"></Skeleton>
				<div className="flex items-center gap-4 flex-wrap mb-12">
					<Skeleton className="w-40 h-6"></Skeleton>
					{Array.from({ length: 4 }).map(() => (
						<Skeleton className="w-20 h-10 rounded-2xl"></Skeleton>
					))}
				</div>
				<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
					{Array.from({ length: 9 }).map(() => (
						<Skeleton className="w-full h-28 rounded-2xl"></Skeleton>
					))}
				</div>
			</div>
		</section>
	);
};

export default Loading;
