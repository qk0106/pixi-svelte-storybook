export type Position = { x: number; y: number; };
export type Tile = { id: string; } & Position;
export type GameStatus = 'idle' | 'inGame' | 'win' | 'lose';
export type HotKeyEmitterEvent = { type: 'hotKey'; key: string; action: 'keyUp' | 'keyDown' };
export type MoveDirection =
  | 'up'
  | 'down'
  | 'left'
  | 'right'
;