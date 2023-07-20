<script lang="ts">
	import { media } from '$lib/api';
	import type { MovieListResult } from '$lib/types';
	import type { View } from '$lib/views';

	export let movies: MovieListResult[];
	export let view: View;
	export let href: string;
</script>

<h2 class="column">
	{view.title}

	{#if href}
		<a {href}>See all</a>
	{/if}
</h2>

<div class="carousel column">
	{#each movies as movie}
		<a href={`/movies/${movie.id}`}>
			<img src={media(movie.poster_path, 500)} alt={movie.title} />
		</a>
	{/each}
</div>

<style>
	.carousel {
		display: flex;
		overflow-x: scroll;
		gap: 1rem;
		height: 10rem;
		scroll-snap-type: mandatory;

		--padding: var(--side), calc(var(--side) + 100vw - var(--column) / 2);
		scroll-padding-left: var(--padding);
		padding: 0 var(--padding);
	}

	.carousel::-webkit-scrollbar {
		display: none;
	}

	.carousel::-webkit-scrollbar-track {
		background-color: var(--background);
	}

	.carousel::-webkit-scrollbar-thumb {
		background-color: var(--accent);
	}

	a {
		height: 100%;
	}

	img {
		height: 100%;
		object-fit: cover;
	}
</style>
