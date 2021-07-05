<script>
	export let name;
</script>

<main>
	<h1>Let's rock, {name}!</h1>
	<p>Visit the <a href="https://svelte.dev/tutorial">tutorial</a> to learn what I'm using or this! </p>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #0000ff;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>
