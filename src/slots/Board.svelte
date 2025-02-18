<script lang="ts">
  import { Container } from 'pixi-svelte';

  import Symbol from './Symbol.svelte';
  import { SYMBOL_SIZE } from './constants';
  import { stateSlots } from './stateSlots.svelte';
</script>

{#each stateSlots.board as reel, reelIndex}
  <Container x={reelIndex * SYMBOL_SIZE} y={reel.y.current}>
    {#each reel.reelState.symbols as symbol, symbolIndex}
      <Symbol {symbol} {symbolIndex} />
    {/each}
  </Container>
{/each}