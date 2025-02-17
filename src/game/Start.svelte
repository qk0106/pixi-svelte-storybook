<script lang="ts">
  import { stateGame, stateGameDerived } from "./stateGame.svelte";
</script>

<button
  disabled={stateGame.gameStatus === "inGame"}
  onclick={() => {
    if (stateGame.gameStatus !== "inGame") {
      stateGameDerived.reset();
    }
    stateGame.gameStatus = "inGame";
    stateGameDerived.moveSnakeHead();
    stateGameDerived.generateNewFood();
  }}>start</button
>

<div>{stateGame.gameStatus}</div>
