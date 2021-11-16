<script lang="ts">

  import Panel from './Panel.svelte';
  import { newFish } from "./typescripts/FishUtils";

  let allFish = [];
  export let getFish = newFish;

  const setFish = async () : Promise<void> => {
    if(allFish.length === 6) { allFish = allFish.slice(1); }
    allFish = allFish.concat(await getFish());
  };
</script>
<div id="grid-wrapper">
  <button on:click={setFish}>Go Fish! </button>
  <main id="grid-body">
    {#each allFish as fish}
    <Panel {...fish} />
    {/each}
  </main>
</div>

<style>

  #grid-wrapper {
    display:flex;
    flex-direction: column;
    align-items: center;
  }

  button {
    background-color: transparent;
    color: white;
    text-shadow: 0 0 40vw 1vw cyan;
    font-weight: 600;
    border-style: solid;
    border-color: white;
    border-radius: 0 0 10px 10px;
    min-height: 50px;
    min-width: 150px;
  }

  #grid-body {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    border-style: solid;
    border-radius: 10px;
    border-color: white;
    padding: 0;
    min-width: 100%;
    min-height: 230px;
    margin: auto;
    margin-top: 3vh;
  }
</style>
