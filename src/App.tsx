import { useState, useEffect } from "react";
import CellContent from "./components/CellContent";
import { Cells } from "./types";
import BaseDialog from "./components/BaseDialog";
import BaseButton from "./components/BaseButton";
import { WINNER_CELLS } from "./constants";
import { CELLS } from "./constants";

export default function App() {
  const [currentPlayer, setCurrentPlayer] = useState<"x" | "o" | "">("x");
  const [isEnd, setIsEnd] = useState(false);
  const [showDialog, setShowDialog] = useState(false);

  const [cells, setCells] = useState<Cells>(CELLS);

  const [xFilledCells, setXFilledCells] = useState<number[]>([]);
  const [oFilledCells, setOFilledCells] = useState<number[]>([]);

  // functions's
  const checkWin = (filledCells: number[]): boolean => {
    return WINNER_CELLS.some((combination) =>
      combination.every((cell) => filledCells.includes(cell))
    );
  };

  const checkCell = (cellNumber: number) => {
    if (!cells[cellNumber].checked && !isEnd) {
      setCells({
        ...cells,
        [cellNumber]: {
          checked: true,
          player: currentPlayer,
        },
      });

      if (currentPlayer === "x") {
        const updatedXFilledCells = [...xFilledCells, cellNumber];
        setXFilledCells(updatedXFilledCells);
      } else {
        const updatedOFilledCells = [...oFilledCells, cellNumber];
        setOFilledCells(updatedOFilledCells);
      }
    }
  };

  const rematch = () => {
    setXFilledCells([]);
    setOFilledCells([]);

    setCells(CELLS);

    setIsEnd(false);
  };

  const handleCloseDialog = () => {
    setShowDialog(false);
  };

  // useEffect's
  useEffect(() => {
    if (checkWin(oFilledCells)) {
      setIsEnd(true);
      setShowDialog(true);
    } else {
      setCurrentPlayer("x");
    }
    return () => {};
  }, [oFilledCells]);

  useEffect(() => {
    if (checkWin(xFilledCells)) {
      setIsEnd(true);
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

          <section id="" className="flex justify-around  mt-8">
            <div className="text-blue-800 text-xl">5</div>
            <BaseButton onClick={rematch} disabled={!isEnd}></BaseButton>
            <div className="text-blue-800 text-xl">4</div>
          </section>
        </div>

        {isEnd && (
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
