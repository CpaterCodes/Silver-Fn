<script lang="ts">
	export let name = 'people';
	import Grid from "./Grid.svelte";

</script>

<header>
	<h1>Let's rock, {name}!</h1>
	<p>Visit the <a href="https://svelte.dev/tutorial">tutorial</a> to learn what I'm using for this! </p>
</header>
<Grid/>

<style>
	header {
		border-radius: 0 0 5vh 5vh;
		border-style: solid;
		border-color: white;
		box-shadow: 0 0 40vw 1vw cyan;
		text-align: center;
		padding: 2em;
		margin: 0 auto;
	}

	h1 {
		color: white;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 300;
		text-shadow: 0 0 30px cyan;
	}
</style>
