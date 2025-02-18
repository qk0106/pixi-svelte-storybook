<script lang="ts">
  import EnableHotkey from "./EnableHotkey.svelte";
  import OnHotkey from "./OnHotkey.svelte";
  import { stateGameDerived } from "./stateGame.svelte";

  stateGameDerived.eatFoodEffect();
  stateGameDerived.collisionEffect();
</script>

<EnableHotkey />

<OnHotkey
  hotkey="ArrowUp"
  onpress={() => stateGameDerived.updateDirection({ moveDirection: "up" })}
/>

<OnHotkey
  hotkey="ArrowDown"
  onpress={() => stateGameDerived.updateDirection({ moveDirection: "down" })}
/>

<OnHotkey
  hotkey="ArrowLeft"
  onpress={() => stateGameDerived.updateDirection({ moveDirection: "left" })}
/>

<OnHotkey
  hotkey="ArrowRight"
  onpress={() => stateGameDerived.updateDirection({ moveDirection: "right" })}
/>
