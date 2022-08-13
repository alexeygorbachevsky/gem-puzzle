import { getIsElementsInOneRow } from "helpers";

function getDragStart(config) {
  const { elements, values } = this._state;

  return function () {
    setTimeout(() => {
      this.classList.add("puzzle_hidden");
    });

    config.isAllowDragDrop = true;
    config.currentPuzzle = this;

    const currentPuzzleIndex = elements.puzzles.findIndex(
      el => el === config.currentPuzzle,
    );
    const emptyElementIndex = elements.puzzles.findIndex(
      el => el.className === "empty",
    );

    const isElementsInOneRow = getIsElementsInOneRow({
      values,
      currentPuzzleIndex,
      emptyElementIndex,
    });

    if (
      !(
        currentPuzzleIndex === emptyElementIndex + values.dimension ||
        currentPuzzleIndex === emptyElementIndex - values.dimension ||
        (currentPuzzleIndex === emptyElementIndex + 1 && isElementsInOneRow) ||
        (currentPuzzleIndex === emptyElementIndex - 1 && isElementsInOneRow)
      )
    ) {
      config.isAllowDragDrop = false;
    }
  };
}

export default getDragStart;
