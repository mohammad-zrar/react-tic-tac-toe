import { Cells } from "./types";

export const WINNER_CELLS: number[][] = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [3, 5, 7],
] as const;

export const CELLS: Cells = {
  1: { checked: false, player: "" },
  2: { checked: false, player: "" },
  3: { checked: false, player: "" },
  4: { checked: false, player: "" },
  5: { checked: false, player: "" },
  6: { checked: false, player: "" },
  7: { checked: false, player: "" },
  8: { checked: false, player: "" },
  9: { checked: false, player: "" },
};
