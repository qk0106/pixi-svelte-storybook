import { createReel } from "./utils.svelte";
import { INITIAL_BOARD } from "./constants";

export const stateSlots = $state({
  board: INITIAL_BOARD.map((symbolNames, reelIndex) =>
    createReel({ symbolNames, reelIndex })
  ),
});

const spin = async () => {
  await Promise.all(
    stateSlots.board.map(async (reel, reelIndex) => {
      await reel.spin({ reelIndex });
    })
  );
};

export const stateSlotsDerived = {
  spin,
};
