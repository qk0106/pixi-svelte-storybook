<script lang="ts">
  import { App, Container, createApp, setAppContext } from "pixi-svelte";

  import BoardFrame from "./BoardFrame.svelte";
  import Board from "./Board.svelte";
  import BoardMask from "./BoardMask.svelte";
  import { stateSlotsDerived } from "./stateSlots.svelte";

  const app = createApp({
    assets: {
      eggHead: { type: "sprite", src: "https://pixijs.com/assets/eggHead.png" },
      flowerTop: {
        type: "sprite",
        src: "https://pixijs.com/assets/flowerTop.png",
      },
      helmlok: { type: "sprite", src: "https://pixijs.com/assets/helmlok.png" },
      skully: { type: "sprite", src: "https://pixijs.com/assets/skully.png" },
    },
  });
  setAppContext(app);

  let spinning = $state(false);
</script>

<button
  disabled={spinning}
  onclick={async () => {
    spinning = true;
    await stateSlotsDerived.spin();
    spinning = false;
  }}>click to spin</button
>

<App>
  {#if app.stateApp.loaded}
    <Container x={300} y={400}>
      <BoardFrame />
      <Container>
        <Board />
        <BoardMask />
      </Container>
    </Container>
  {/if}
</App>
