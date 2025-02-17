<script lang="ts">
  import { stateGame } from "./stateGame.svelte";
  import Tile from "./Tile.svelte";
</script>

<Tile position={stateGame.snakeFood} type="food" />
