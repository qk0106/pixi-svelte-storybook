// export const GRID_DIMENSIONS = { width: 25, height: 25 };
export const GRID_DIMENSIONS = { width: 10, height: 10 };
export const TILE_SIZE = 20;
export const GRID = Array.from(
  { length: GRID_DIMENSIONS.width },
  (_, reelIndex) =>
    Array.from({ length: GRID_DIMENSIONS.height }, (_, rowIndex) => ({
      x: reelIndex,
      y: rowIndex,
    }))
);

