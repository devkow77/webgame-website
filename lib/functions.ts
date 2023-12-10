const fetchGames = async (src: string) => {
	const response = await fetch(src, { cache: 'no-cache' });
	if (!response.ok) console.log(response);
	const data = await response.json();
	return data;
};

const fixTitle = (name: string) => {
	return name.split('-').join(' ');
};

const colorRating = (rate: number) => {
	if (rate > 9.5) return 'best-games';
	if (rate <= 9.5 && rate >= 9) return 'nice-games';
	if (rate < 9 && rate > 7.5) return 'good-games';
	if (rate <= 7.5 && rate > 4.5) return 'medium-games';
	else return 'worst-games';
};

export { fetchGames, fixTitle, colorRating };
