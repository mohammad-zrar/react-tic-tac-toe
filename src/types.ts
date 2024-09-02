export type Cell = {
  checked: boolean;
  player: string | null;
};

export type Cells = {
  [key: number]: Cell;
};

export type CurrentPlayer = "o" | "x" | "";
