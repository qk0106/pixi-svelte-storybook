export const SYMBOL_NAME_LIST = [
  'eggHead',
  'flowerTop',
  'helmlok',
  'skully',
];

export type SymbolName = typeof SYMBOL_NAME_LIST[number];

export const SYMBOL_SIZE = 100;

export const INITIAL_BOARD = [
  ['eggHead', 'helmlok', 'eggHead'],
  ['flowerTop', 'skully', 'helmlok'],
  ['helmlok', 'flowerTop', 'skully'],
];
