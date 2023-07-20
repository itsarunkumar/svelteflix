<script lang="ts">
	import type { MovieDetails } from '$lib/types';
	import { media } from '$lib/api';
	export let movie: MovieDetails;

	$: images = movie.images;
	$: backdrop = images.backdrops.find((image) => !image.iso_639_1) || images.backdrops[0];
	$: logos = images.logos.find((image) => !image.iso_639_1) || images.backdrops[0];
</script>

<a href={`/movies/${movie.id}`} class="column">
	<img
		class="backdrop"
		src={media(backdrop.file_path, 1280)}
		alt={movie.original_title}
		style="aspect-ratio: {backdrop.aspect_ratio};"
	/>
	<img
		class="logo"
		src={media(logos.file_path, 1280)}
		alt={logos.file_path}
		style="aspect-ratio: {logos.aspect_ratio};"
	/>
</a>

<style>
	a {
		display: flex;
	}

	.backdrop {
		width: 100%;
	}

	.logo {
		position: absolute;
		top: 0;
		left: 0;
		width: 30%;
		height: 100%;
		object-fit: contain;
		filter: drop-shadow(0 0 10px rgba(0, 0, 0, 0.5));
	}
</style>
