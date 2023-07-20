export const base = 'https://api.movies.tastejs.com';
export const media_base = 'https://image.tmdb.org/t/p';

const cache = new Map();

export async function get(
	fetch: typeof globalThis.fetch,
	endpoint: string,
	params?: Record<string, any>
) {
	const query = new URLSearchParams(params).toString();
	const url = `${base}/${endpoint}?${query}`;

	if (cache.has(url)) {
		return cache.get(url);
	}

	const response = await fetch(url);

	const data = await response.json();

	cache.set(url, data);

	return data;
}

export function media(filepath: string, width: number) {
	return `${media_base}/w${width}${filepath}`;
}
