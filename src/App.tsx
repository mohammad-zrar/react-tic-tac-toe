import { useState, useEffect } from "react";
import CellContent from "./components/CellContent";
import { Cells } from "./types";
import BaseDialog from "./components/BaseDialog";

export default function App() {
  const winnerCells: number[][] = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7],
  ] as const;

  const [currentPlayer, setCurrentPlayer] = useState<"x" | "o" | "">("x");
  const [gameEnded, setGameEnded] = useState(false);
  const [showDialog, setShowDialog] = useState(false);

  const [cells, setCells] = useState<Cells>({
    1: { checked: false, player: "" },
    2: { checked: false, player: "" },
    3: { checked: false, player: "" },
    4: { checked: false, player: "" },
    5: { checked: false, player: "" },
    6: { checked: false, player: "" },
    7: { checked: false, player: "" },
    8: { checked: false, player: "" },
    9: { checked: false, player: "" },
  });

  const [xFilledCells, xFilledCelles] = useState<number[]>([]);
  const [oFilledCells, oFilledCelles] = useState<number[]>([]);

  const checkWin = (filledCells: number[]): boolean => {
    return winnerCells.some((combination) =>
      combination.every((cell) => filledCells.includes(cell))
    );
  };

  const checkCell = (cellNumber: number) => {
    if (!cells[cellNumber].checked && !gameEnded) {
      setCells({
        ...cells,
        [cellNumber]: {
          checked: true,
          player: currentPlayer,
        },
      });

      if (currentPlayer === "x") {
        const updatedXFilledCells = [...xFilledCells, cellNumber];
        xFilledCelles(updatedXFilledCells);
      } else {
        const updatedOFilledCells = [...oFilledCells, cellNumber];
        oFilledCelles(updatedOFilledCells);
      }
    }
  };

  const handleCloseDialog = () => {
    setShowDialog(false);
  };

  useEffect(() => {
    if (checkWin(oFilledCells)) {
      setGameEnded(true);
      setShowDialog(true);
    } else {
      setCurrentPlayer("x");
    }
    return () => {};
  }, [oFilledCells]);

  useEffect(() => {
    if (checkWin(xFilledCells)) {
      setGameEnded(true);
      setShowDialog(true);
    } else {
      setCurrentPlayer("o");
    }
    return () => {};
  }, [xFilledCells]);

  return (
    <div>
      <header>
        <h1 className="text-4xl text-center mt-8">
          Tic Tac Toe <br /> Game
        </h1>
      </header>
      <main>
        <div className="w-1/3 bg-gray-50   mx-auto p-8 my-8 shadow-md rounded-md">
          <table className="mx-auto border border-gray-300">
            <tbody className="cursor-pointer">
              <tr className="border border-gray-300">
                <td
                  onClick={() => checkCell(1)}
                  className="text-center w-20 h-20 border border-gray-300 "
                >
                  <CellContent cellData={cells[1]} />
                </td>
                <td
                  onClick={() => checkCell(2)}
                  className="text-center w-20 h-20  border border-gray-300"
                >
                  <CellContent cellData={cells[2]} />
                </td>
                <td
                  onClick={() => checkCell(3)}
                  className="text-center w-20 h-20  border border-gray-300"
                >
                  <CellContent cellData={cells[3]} />
                </td>
              </tr>
              <tr className="border border-gray-300">
                <td
                  onClick={() => checkCell(4)}
                  className="text-center w-20 h-20  border border-gray-300"
                >
                  <CellContent cellData={cells[4]} />
                </td>
                <td
                  onClick={() => checkCell(5)}
                  className="text-center w-20 h-20  border border-gray-300"
                >
                  <CellContent cellData={cells[5]} />
                </td>
                <td
                  onClick={() => checkCell(6)}
                  className="text-center w-20 h-20  border border-gray-300"
                >
                  <CellContent cellData={cells[6]} />
                </td>
              </tr>
              <tr className="border border-gray-300">
                <td
                  onClick={() => checkCell(7)}
                  className="text-center w-20 h-20  border border-gray-300"
                >
                  <CellContent cellData={cells[7]} />
                </td>
                <td
                  onClick={() => checkCell(8)}
                  className="text-center w-20 h-20  border border-gray-300"
                >
                  <CellContent cellData={cells[8]} />
                </td>
                <td
                  onClick={() => checkCell(9)}
                  className="text-center w-20 h-20  border border-gray-300"
                >
                  <CellContent cellData={cells[9]} />
                </td>
              </tr>
            </tbody>
          </table>

          <section className="flex justify-center  mt-8 ">
            <div
              className={
                "shadow-sm  py-2 px-4 rounded-tl-md rounded-bl-md " +
                (currentPlayer === "x"
                  ? "bg-blue-400  text-blue-50"
                  : "bg-blue-50  border-blue-200 text-blue-400")
              }
            >
              <p className="text-lg">X</p>
            </div>
            <div
              className={
                " shadow-sm border py-2 px-4 rounded-tr-md rounded-br-md" +
                (currentPlayer === "o"
                  ? " bg-blue-400 text-blue-50 "
                  : " bg-blue-50  border-blue-200 text-blue-400")
              }
            >
              <p className=" text-lg">O</p>
            </div>
          </section>
        </div>

        {gameEnded && (
          <BaseDialog
            show={showDialog}
            winner={currentPlayer}
            closeDialog={handleCloseDialog}
          />
        )}
      </main>
    </div>
  );
}
