<script lang="ts">

  let allFish = [];
  export let getFish = async () : Promise<{
    genus: string,
    species: string,
    name: string,
    img: string
  }> => {
    const Id = Math.floor(Math.random() * 13000) + 1;
    console.log(Id);
    const fishRecord = await fetch(`https://fishbase.ropensci.org/species/${Id}?`);
    if (!fishRecord.ok) { fishRecord = await fetch(`https://fishbase.ropensci.org/species/69`)};
    const fishJson = await fishRecord.json();
    const { Genus, Species, FBname, image } = fishJson.data[0];

    return { genus: Genus, species: Species, name: FBname, img: image };

  };

  const setFish = async () : void => {
    if(allFish.length === 3) {
      allFish = await allFish.slice(1);
    }
    allFish = allFish.concat(await getFish());
  };

  import Panel from './Panel.svelte';
</script>

<button on:click={setFish}>Go Fish! </button>
<section id="grid-body">
  {#each allFish as fish (fish.name)}
  <Panel {...fish} />
  {/each}
</section>

<style>
  #grid-body {
    display: flex;
    justify-content: space-around;
    border-style: solid;
    border-color: white;
    overflow-x: scroll;
    width: 95vw;
    margin: auto;
    margin-top: 3vh;
  }

  button{
    margin-left: 40%;
    margin-top: 0;
    margin-bottom: 0;
    width: 30vw;
  }
</style>
