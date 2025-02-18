<script lang="ts">
  import Tile from './Tile.svelte';
  import { stateGame, stateGameDerived } from './stateGame.svelte';
</script>

<Tile position={stateGame.snakeHead} type="snakeHead" />

{#each stateGame.snakeBody as tile}
  <Tile position={tile} type="snakeBody" />
{/each}

<Tile position={stateGameDerived.snakeHeadNext()} type="snakeHeadNext" />