<script lang="ts">
  import { App, createApp, setAppContext } from "pixi-svelte";

  import Logic from './Logic.svelte';
  import Map from './Map.svelte';
  import Snake from './Snake.svelte';
  import Food from './Food.svelte';
  // import Score from './Score.svelte';
  import Start from './Start.svelte';

  const app = createApp({ assets: {} });
  setAppContext(app);
</script>

<App>
  <Logic />
  <Map />
  <Snake />
  <Food />
  <!-- <Score /> -->
  <Start />
</App>
