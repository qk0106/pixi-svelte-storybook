<script lang="ts">
  import { Rectangle } from "pixi-svelte";

  import { TILE_SIZE } from "./constant";
  import type { Position } from "./types";

  const TILE_COLOR_MAP = {
    map: 0x00ffff,
    food: 0x312fff,
    snakeBody: 0x000000,
    snakeHead: 0xfff000,
    snakeHeadNext: 0x00FF00,
  } as const;

  type Props = {
    position: Position;
    type: "map" | "food" | "snakeBody" | 'snakeHead' | 'snakeHeadNext';
  };

  const props: Props = $props();
  const positionDerived = $derived({
    x: props.position.x * TILE_SIZE,
    y: props.position.y * TILE_SIZE,
  });
</script>

<Rectangle
  {...positionDerived}
  width={TILE_SIZE}
  height={TILE_SIZE}
  backgroundColor={TILE_COLOR_MAP[props.type]}
  borderColor={0x000000}
  borderWidth={1}
  alpha={0.5}
/>
