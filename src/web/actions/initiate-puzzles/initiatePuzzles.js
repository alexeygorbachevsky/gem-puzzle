import { swapPuzzles } from "../swap-puzzles";

function initiatePuzzles() {
  const { elements } = this._state;

  for (const puzzle of elements.puzzles) {
    puzzle.addEventListener("click", () => {
      if (puzzle.className === "puzzle") {
        swapPuzzles.call(this, puzzle);
      }
    });

    if (puzzle.className === "puzzle") {
      puzzle.setAttribute("draggable", true);
    }
  }
}

export default initiatePuzzles;
