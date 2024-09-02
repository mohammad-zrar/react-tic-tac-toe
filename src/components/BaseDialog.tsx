import { CurrentPlayer } from "../types";

export default function ({
  winner,
  show,
  closeDialog,
}: {
  winner: CurrentPlayer;
  show: boolean;
  closeDialog: () => void;
}) {
  let message = "";

  if (winner === "x") {
    message = "X player has won!";
  } else if (winner === "o") {
    message = "O player has won!";
  } else {
    message = "It's a draw!";
  }

  return (
    <>
      {show && (
        <div className="backdrop-blur-sm  z-40 fixed w-screen h-screen top-0"></div>
      )}
      {show && (
        <dialog open className="shadow-md p-2 fixed rounded-md top-1/3 z-50">
          <section className="p-8">{message}</section>
          <menu className="flex justify-end">
            <button
              className="hover:bg-gray-50 tw-rounded text-gray-600 py-1 px-2"
              onClick={closeDialog}
            >
              Close
            </button>
          </menu>
        </dialog>
      )}
    </>
  );
}
