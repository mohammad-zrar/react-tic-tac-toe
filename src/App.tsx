import { useState } from "react";

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
  ];

  const [player1FilledCells, setPlayer1FilledCelles] = useState<number[]>([]);
  const [player2FilledCells, setPlayer2FilledCelles] = useState<number[]>([]);

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
            <tr className="border border-gray-300">
              <td className="p-8 border border-gray-300">1</td>
              <td className="p-8 border border-gray-300">2</td>
              <td className="p-8 border border-gray-300">3</td>
            </tr>
            <tr className="border border-gray-300">
              <td className="p-8 border border-gray-300">4</td>
              <td className="p-8 border border-gray-300">5</td>
              <td className="p-8 border border-gray-300">6</td>
            </tr>
            <tr className="border border-gray-300">
              <td className="p-8 border border-gray-300">7</td>
              <td className="p-8 border border-gray-300">8</td>
              <td className="p-8 border border-gray-300">9</td>
            </tr>
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
