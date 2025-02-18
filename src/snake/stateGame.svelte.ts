import { GRID_DIMENSIONS } from "./constant";
import type { GameStatus, Position, Tile, MoveDirection } from "./types";
import { getTileId, waitForTimeout } from "./utils";

const DEFAULT_GAME_STATUS = "idle" as GameStatus;
const DEFAULT_MOVE_DIRECTION = "right" as MoveDirection;
const DEFAULT_SNAKE_HEAD_POSITION = { x: 2, y: 0 } as Position;
const DEFAULT_SNAKE_FOOD_POSITION = { x: -1, y: -1 } as Position;
const DEFAULT_SNAKE_BODY_POSITIONS = [
  { x: 1, y: 0 },
  { x: 0, y: 0 },
] as Position[];
const DEFAULT_SNAKE_HEAD = {
  ...DEFAULT_SNAKE_HEAD_POSITION,
  id: getTileId(DEFAULT_SNAKE_HEAD_POSITION),
} as Tile;
const DEFAULT_SNAKE_FOOD = {
  ...DEFAULT_SNAKE_FOOD_POSITION,
  id: getTileId(DEFAULT_SNAKE_FOOD_POSITION),
} as Tile;
const DEFAULT_SNAKE_BODY = DEFAULT_SNAKE_BODY_POSITIONS.map((position) => ({
  ...position,
  id: getTileId(position),
})) as Tile[];

export const stateGame = $state({
  gameStatus: DEFAULT_GAME_STATUS,
  snakeHead: DEFAULT_SNAKE_HEAD,
  // snakeTail: DEFAULT_SNAKE_BODY,
  snakeFood: DEFAULT_SNAKE_FOOD,
  snakeBody: DEFAULT_SNAKE_BODY,
  moveDirection: DEFAULT_MOVE_DIRECTION,
});

const snake = () => [stateGame.snakeHead, ...stateGame.snakeBody];
const snakeIds = () => snake().map((snakeBodyPart) => snakeBodyPart.id);

const getNextSnakeHead = ({
  moveDirection,
}: {
  moveDirection: MoveDirection;
}) => {
  const nextPosition = { x: stateGame.snakeHead.x, y: stateGame.snakeHead.y };
  if (moveDirection === "up") nextPosition.y = nextPosition.y - 1;
  if (moveDirection === "down") nextPosition.y = nextPosition.y + 1;
  if (moveDirection === "left") nextPosition.x = nextPosition.x - 1;
  if (moveDirection === "right") nextPosition.x = nextPosition.x + 1;
  return { ...nextPosition, id: getTileId(nextPosition) };
};

const updateDirection = ({
  moveDirection,
}: {
  moveDirection: MoveDirection;
}) => {
  const predictedNextSnakeHead = getNextSnakeHead({ moveDirection });

  if (!snakeIds().includes(predictedNextSnakeHead.id)) {
    stateGame.moveDirection = moveDirection;
  }
};

const snakeHeadNext = () =>
  getNextSnakeHead({
    moveDirection: stateGame.moveDirection,
  });

// https://stackoverflow.com/questions/1527803/generating-random-whole-numbers-in-javascript-in-a-specific-range
function getRandomInt(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const generateNewFood = () => {
  const newPosition = {
    x: getRandomInt(0, GRID_DIMENSIONS.width - 1),
    y: getRandomInt(0, GRID_DIMENSIONS.height - 1),
  };

  const newTile = {
    ...newPosition,
    id: getTileId(newPosition),
  };

  if (stateGameDerived.snakeIds().includes(newTile.id)) {
    generateNewFood(); // recursive
  } else {
    stateGame.snakeFood = newTile;
  }
};

const moveSnakeBody = () => {
  // remove tail
  const newSnakeBody = stateGame.snakeBody.slice(
    0,
    stateGame.snakeBody.length - 1
  );

  // add head
  if (newSnakeBody.length > 0) {
    stateGame.snakeBody = [{ ...stateGame.snakeHead }, ...newSnakeBody];
  }
};

const moveSnakeHead = async () => {
  if (stateGame.gameStatus === "inGame") {
    moveSnakeBody();
    stateGame.snakeHead = snakeHeadNext();
    await waitForTimeout(500);
    await moveSnakeHead();
  };
};

const eatFoodEffect = () => {
  $effect(() => {
    if (stateGame.snakeFood.id === snakeHeadNext().id) {
      stateGame.snakeBody = [stateGame.snakeHead, ...stateGame.snakeBody];
      stateGame.snakeHead = stateGame.snakeFood;
      generateNewFood();
    }
  });
};

const collisionEffect = () => {
  $effect(() => {
    if (stateGame.gameStatus === "inGame") {
      // body collision
      stateGame.snakeBody.forEach((snakePart) => {
        if (snakePart.id === stateGame.snakeHead.id) {
          stateGame.gameStatus = "lose";
        }
      });

      // edge collision
      if (stateGame.snakeHead.x < 0) stateGame.gameStatus = "lose";
      if (stateGame.snakeHead.y < 0) stateGame.gameStatus = "lose";
      if (stateGame.snakeHead.x > GRID_DIMENSIONS.width - 1)
        stateGame.gameStatus = "lose";
      if (stateGame.snakeHead.y > GRID_DIMENSIONS.height - 1)
        stateGame.gameStatus = "lose";
    }

    // TODO
  });
};

export const stateGameDerived = {
  snake,
  snakeIds,
  getNextSnakeHead,
  snakeHeadNext,
  updateDirection,
  generateNewFood,
  moveSnakeHead,
  eatFoodEffect,
  collisionEffect,
  reset: () => {
    stateGame.gameStatus = DEFAULT_GAME_STATUS;
    stateGame.snakeHead = DEFAULT_SNAKE_HEAD;
    stateGame.snakeFood = DEFAULT_SNAKE_FOOD;
    stateGame.snakeBody = DEFAULT_SNAKE_BODY;
    stateGame.moveDirection = DEFAULT_MOVE_DIRECTION;
  },
};
