<script lang="ts">
  import Tile from './Tile.svelte';
  import { GRID } from './constant';
</script>

{#each GRID as reel}
  {#each reel as tile}
    <Tile position={tile} type="map" />
  {/each}
{/each}
