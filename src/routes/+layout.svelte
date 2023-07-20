<script>
	import '../styles.css';
	import logo from '$lib/images/logo.svg';
	import { page } from '$app/stores';
</script>

<nav>
	<a href="/">
		<img src={logo} alt="app logo" />
	</a>

	<div class="links">
		<a href="/search">search</a>
		<a href="/watchlist">watchlist</a>
		<a href="/register"> register </a>
	</div>
</nav>

<main class:infinite={$page.data.infinite}>
	<slot />
</main>

<footer>
	<p>Data Provided BY an API</p>
</footer>

<style>
	nav {
		display: flex;
		width: 100%;
		height: 4rem;
		align-items: center;
		justify-content: space-between;
		max-width: var(--column);
		padding: 0 var(--side);
		color: var(--accent);
	}

	a {
		color: inherit;
		text-decoration: none;
	}

	img {
		height: 1rem;
	}

	.links {
		display: flex;
		gap: 1rem;
	}

	main.infinite {
		height: 0;
		flex: 1;
		overflow: hidden;
	}

	footer {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 3rem;
		background-color: var(--accent);
		color: var(--background);
	}
</style>
