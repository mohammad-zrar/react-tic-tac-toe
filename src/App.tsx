import { useState } from "react";
import CellContent from "./components/CellContent";
import { Cells } from "./types";

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

  const [currentPlayer, setCurrentPlayer] = useState<"p1" | "p2">("p1");

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

  const [player1FilledCells, setPlayer1FilledCelles] = useState<number[]>([]);
  const [player2FilledCells, setPlayer2FilledCelles] = useState<number[]>([]);

  const checkCell = (cellNumber: number) => {
    if (!cells[cellNumber].checked) {
      setCells({
        ...cells,

        [cellNumber]: {
          checked: true,
          player: currentPlayer,
        },
      });
      if (currentPlayer === "p1") setCurrentPlayer("p2");
      else {
        setCurrentPlayer("p1");
      }
    }
  };

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

          <section className="flex justify-center  mt-8">
            <div className="bg-blue-400 shadow-sm  py-2 px-4 rounded-tl-md rounded-bl-md">
              <p className="text-lg text-blue-50">Player 1</p>
            </div>
            <div className="bg-blue-50 shadow-sm border border-blue-200 py-2 px-4 rounded-tr-md rounded-br-md">
              <p className="text-lg text-blue-400">Player 2</p>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
