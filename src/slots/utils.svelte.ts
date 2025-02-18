import { Tween } from "svelte/motion";
import { backInOut } from "svelte/easing";

import { SYMBOL_SIZE, SYMBOL_NAME_LIST, type SymbolName, INITIAL_BOARD } from "./constants";

export const randomSymbolName = () => {
  return SYMBOL_NAME_LIST[Math.floor(Math.random() * SYMBOL_NAME_LIST.length)];
};

export const createSymbol = ({ symbolName }: { symbolName: SymbolName }) => {
  return {
    symbolName: symbolName,
    width: SYMBOL_SIZE,
    height: SYMBOL_SIZE,
  };
};

export const createReel = ({
  symbolNames,
  reelIndex,
}: {
  symbolNames: SymbolName[];
  reelIndex: number;
}) => {
  const reelState = $state({
    targetSymbols: [] as SymbolType[],
    paddingSymbols: [] as SymbolType[],
    symbols: symbolNames.map((symbolName) => createSymbol({ symbolName })),
  });

  const y = new Tween(0);

  const addPadding = (paddingSize: number) => {
    const paddingSymbolNames = Array.from({ length: paddingSize }, randomSymbolName);

    reelState.paddingSymbols = paddingSymbolNames.map((symbolName) =>
      createSymbol({ symbolName })
    );

    reelState.symbols = [
      ...reelState.targetSymbols,
      ...reelState.paddingSymbols,
      ...reelState.symbols,
    ];
  };

  const moveToTop = () => {
    y.set(
      -(reelState.targetSymbols.length + reelState.paddingSymbols.length) *
        SYMBOL_SIZE,
      { duration: 0 }
    );
  };

  const slideDown = async () => {
    const speed = 0.8;
    const distance = (reelState.symbols.length - INITIAL_BOARD[0].length) * SYMBOL_SIZE;

    await y.set(0, { duration: distance / speed });
  };

  const generateTargetSymbols = () => {
    const targetSymbolNames = Array.from({ length: 3 }, randomSymbolName);

    reelState.targetSymbols = targetSymbolNames.map((symbolName) =>
      createSymbol({ symbolName })
    );
  };

  const setSymbolsWithTargetSymbols = () => {
    reelState.symbols = reelState.targetSymbols;
    reelState.targetSymbols = [];
    reelState.paddingSymbols = [];
  };

  const spin = async ({ reelIndex }: {reelIndex: number}) => {
    generateTargetSymbols();
    addPadding(reelIndex * 3);
    moveToTop();
    await slideDown();
    setSymbolsWithTargetSymbols();
  };

  return {
    y,
    reelState,
    spin,
  };
};

export type SymbolType = ReturnType<typeof createSymbol>;
