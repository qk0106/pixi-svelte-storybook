<script lang="ts">
  import { Sprite } from 'pixi-svelte';

  import type { SymbolType } from './utils.svelte';
  import { SYMBOL_SIZE } from './constants';

  type Props = {
    symbol: SymbolType;
    symbolIndex: number;
  };

  const props: Props = $props();
</script>

<Sprite
  key={props.symbol.symbolName}
  y={props.symbolIndex * SYMBOL_SIZE}
  width={props.symbol.width}
  height={props.symbol.height}
/>