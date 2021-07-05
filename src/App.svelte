<script>
	export let name = 'people';
</script>

<main>
	<h1>Let's rock, {name}!</h1>
	<p>Visit the <a href="https://svelte.dev/tutorial">tutorial</a> to learn what I'm using or this! </p>
</main>

<style>
	main {
		border-radius: 0 0 5vh 5vh;
		box-shadow: 0 0 40vw 1vw cyan;
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		opacity: 100%;
		color: white;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 300;
		text-shadow: 0 0 30px cyan;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>
