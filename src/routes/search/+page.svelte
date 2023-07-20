<script lang="ts">
	import ResultsPage from '$lib/components/ResultsPage.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<div class="column form">
	<h1>Search</h1>
	<form>
		<input name="query" value={data.query} autocomplete="off" spellcheck="false" />
	</form>

	{#if data.query}
		{#key data.query}
			<ResultsPage movies={data.movies} next={null} />
		{/key}
	{/if}
</div>

<style>
	input {
		font-family: inherit;
		font-size: 2em;
		padding: 0.5em;
		width: 100%;
		background: rgba(255, 255, 255, 0.1);
		border: none;
		border-radius: 0.2rem;
		color: white;
	}

	input:focus-visible {
		outline: 2px solid var(--accent);
	}

	.form {
		width: 100%;
		height: 100%;
	}
</style>
