import { ReactNode } from "react";
import Cross from "./Cross";
import Nought from "./Nought";
import { Cell } from "../types";

type CellContentProps = {
  cellData: Cell;
};

export default function CellContent({ cellData }: CellContentProps) {
  let content: ReactNode | null = null;

  if (cellData.checked) {
    if (cellData.player === "x") {
      content = <Cross />;
    } else if (cellData.player === "o") {
      content = <Nought />;
    }
  }
  return <>{content}</>;
}
