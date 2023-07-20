import type { MovieDetails, MovieList } from '$lib/types.js';
import * as api from '$lib/api.js';

export async function load({ fetch }) {
	const [trending, now_playing, upcoming] = await Promise.all([
		api.get(fetch, 'trending/movie/day', { page: '1' }),
		api.get(fetch, '/movie/now_playing', { page: '1' }),
		api.get(fetch, '/movie/upcoming', { page: '1' })
	]);

	// const trending = (await api.get(fetch, 'trending/movie/day')) as MovieList;
	// const now_playing = (await api.get(fetch, '/movie/now_playing')) as MovieList;
	// const upcoming = (await api.get(fetch, '/movie/upcoming')) as MovieList;

	const feautured = trending.results[0];

	const feautured_data = (await api.get(fetch, `movie/${feautured.id}`, {
		append_to_response: 'images'
	})) as MovieDetails;

	return {
		trending,
		feautured: feautured_data,
		now_playing,
		upcoming
	};
}
