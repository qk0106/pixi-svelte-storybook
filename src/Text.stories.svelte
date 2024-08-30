<script lang="ts" context="module">
  import { Graphics } from "pixi-svelte";

  export const meta = {
    title: "pixi-svelte/Text",
    component: Graphics,
    args: {
      x: 50,
      y: 50,
      zIndex: 1,
      value: "Hello world",
      style: { fill: 0x000000, fontWeight: "bold" },
      anchor: { x: 0, y: 0 },
    },
  };
</script>

<script lang="ts">
  import { Story } from "@storybook/addon-svelte-csf";
  import { Text } from "pixi-svelte";

  import StoryPixi from "./StoryPixi.svelte";
</script>

<Story let:args name="Preview">
  <StoryPixi>
    <Text {...args} />
  </StoryPixi>
</Story>
