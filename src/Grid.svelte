<script lang="ts">

  import Panel from './Panel.svelte';
  let allFish = [];
  export let getFish = async () : Promise<{
    genus: string,
    species: string,
    name: string,
    img: string
  }> => {
    const Id = Math.floor(Math.random() * 13000) + 1;
    console.log(Id);
    let fishRecord = await fetch(`https://fishbase.ropensci.org/species/${Id}?`);
    if (!fishRecord.ok) {
      fishRecord = await fetch(`https://fishbase.ropensci.org/species/69`)
      };
    const fishJson = await fishRecord.json();
    const { Genus, Species, FBname, image } = fishJson.data[0];

    return { genus: Genus, species: Species, name: FBname, img: image };
  };

  const setFish = async () : Promise<void> => {
    if(allFish.length === 6) { allFish = allFish.slice(1); }
    allFish = allFish.concat(await getFish());
  };
</script>

<button on:click={setFish}>Go Fish! </button>
<section id="grid-body">
  {#each allFish as fish}
  <Panel {...fish} />
  {/each}
</section>

<style>
  #grid-body {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    border-style: solid;
    border-radius: 10px;
    border-color: white;
    overflow: auto;
    padding: 0;
    min-width: 500px;
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
