<script lang="ts">
  import { Rectangle } from "pixi-svelte";

  import { SYMBOL_SIZE, INITIAL_BOARD } from "./constants";
</script>

<Rectangle
  width={INITIAL_BOARD.length * SYMBOL_SIZE}
  height={INITIAL_BOARD[0].length * SYMBOL_SIZE}
  backgroundColor={0x00ffff}
/>