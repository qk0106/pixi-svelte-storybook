import type { Position } from "./types";

export const waitForTimeout = (time: number) =>
	new Promise<void>((resolve) => {
		const timeout = setTimeout(() => {
			clearTimeout(timeout);
			resolve();
		}, time);
	});

export const createInterruptible = () => {
  type ResolveArgs = { interrupted: boolean };
  type Resolve = (args: ResolveArgs) => void;

  let resolveList: Resolve[] = [];

  const add = (targetToWait: () => Promise<any>) =>
    new Promise<ResolveArgs>(async (resolve) => {
      resolveList.push(resolve);
      await targetToWait();
      resolve({ interrupted: false });
    });

  const clear = () => (resolveList = []);
  const getLength = () => resolveList.length;
  const interrupt = () => resolveList.forEach((resolve) => resolve({ interrupted: true }));

  return {
    add,
    clear,
    getLength,
    interrupt,
  };
};
  
export const getTileId = (position: Position) => {
  return `${position.x}_${position.y}`
};

export const getNextSnakeHead = () => {
    const nextPosition = { x: stateGame.snakeHead.x, y: stateGame.snakeHead.y };
    if(stateGame.moveDirection === 'up') nextPosition.y = nextPosition.y - 1;
    if(stateGame.moveDirection === 'down') nextPosition.y = nextPosition.y + 1;
    if(stateGame.moveDirection === 'left') nextPosition.x = nextPosition.x - 1;
    if(stateGame.moveDirection === 'right') nextPosition.x = nextPosition.x + 1;
    return { ...nextPosition, id: getTileId(nextPosition) };
};