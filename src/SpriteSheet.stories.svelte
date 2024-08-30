<script lang="ts" context="module">
  import { Graphics } from "pixi-svelte";

  export const meta = {
    title: "pixi-svelte/SpriteSheet (AnimatedSprite)",
    component: Graphics,
    args: {
      width: 100,
      height: 100,
      x: 50,
      y: 50,
      zIndex: 1,
      play: true,
      animationSpeed: 1,
      anchor: { x: 0, y: 0 },
    },
  };
</script>

<script lang="ts">
  import { Story } from "@storybook/addon-svelte-csf";
  import { SpriteSheet } from "pixi-svelte";

  import StoryPixi from "./StoryPixi.svelte";

  const assets = {
    fighter: {
      type: "spriteSheet",
      src: "https://test-twist-front-2.s3.ap-southeast-2.amazonaws.com/pixi-svelte-package/fighter/fighter.json",
    },
  };
</script>

<Story let:args name="Preview">
  <StoryPixi {assets}>
    <SpriteSheet {...args} key="fighter" loop />
  </StoryPixi>
</Story>
