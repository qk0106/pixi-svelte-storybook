<script lang="ts" context="module">
  import { Graphics } from "pixi-svelte";

  export const meta = {
    title: "pixi-svelte/SvgSprite",
    component: Graphics,
    args: {
      x: 50,
      y: 50,
      width: 690,
      height: 460,
      zIndex: 1,
      anchor: { x: 0, y: 0 },
    },
  };
</script>

<script lang="ts">
  import { Story } from "@storybook/addon-svelte-csf";
  import { SvgSprite } from "pixi-svelte";

  import StoryPixi from "./StoryPixi.svelte";
  import svg from "./assets/logo.svg";

</script>

<Story let:args name="Preview">
  <StoryPixi>
    <SvgSprite {...args} {svg} />
  </StoryPixi>
</Story>
