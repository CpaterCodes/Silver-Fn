<script lang="ts">
	import Grid from "./Grid.svelte";

</script>

<header>
	<h1>_ Silver-Fn _</h1>
	<h4> An application for fish species discovery </h4>
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
		font-size: 4em;
		font-weight: 300;
		text-transform: uppercase;
	}

	h1, h4 {
		color: white;
		text-shadow: 0 0 40vw 1vw cyan;
	}
</style>
