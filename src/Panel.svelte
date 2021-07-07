<script lang="ts">
  export let genus: string;
  export let species: string;
  export let name: string;
  export let img: string;
</script>

<div class="species-panel">
  <img src={img}/>
  <footer>
    {name}
    <i>{'[' + genus + ' ' + species + ']'}</i>
  </footer>
</div>

<style>
  .species-panel{
    width: 200px;
    height: 200px;
    border-color: white;
    border-style: solid;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 0 0 20px 0 cyan;
    margin: 10px;
  }

  img {
    width: 100%;
    border-radius: 10px 10px 0 0 ;
    border-bottom-color: inherit;
    border-bottom-style: solid;
  }

  footer {
    width: 70%;
    text-align: center;
  }
</style>
