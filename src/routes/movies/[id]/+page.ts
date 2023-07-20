import type { PageLoad } from './$types';
import * as api from '$lib/api';
import type { MovieDetails, MovieList } from '$lib/types';
export const load = (async ({ params, fetch }) => {
	const { id } = params;
	const movie = (await api.get(fetch, `/movie/${id}`, {
		append_to_response: 'images,videos,recommendations'
	})) as MovieDetails;

	const trailer = movie.videos.results.find((video) => {
		return (
			video.type === 'Trailer' &&
			video.site === 'YouTube' &&
			(video.type === 'Trailer' || video.type === 'Teaser')
		);
	});

	return {
		movie,
		trailer
	};
}) satisfies PageLoad;
