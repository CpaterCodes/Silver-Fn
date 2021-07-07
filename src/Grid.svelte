<script lang="ts">

  export let getFish = async () : Promise<{
    genus: string,
    species: string,
    name: string,
    img: string
  }> => {
    console.log('test');
    return { genus:"foo", species: "bar", name:"baz", img:"?" };
  };

  import Panel from './Panel.svelte';
</script>

<button on:click={getFish()}/>
<section id="grid-body">
  pending
</section>

<style>
  #grid-body {
    border-style: solid;
    border-color: white;
    width: 95vw;
    margin: auto;
    margin-top: 3vh;
  }
</style>
