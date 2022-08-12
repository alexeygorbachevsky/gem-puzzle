import { checkPuzzlesIndexesOrder } from "../check-puzzles-indexes-order";
import { animateSwapping } from "./helpers";

function swapPuzzles(puzzle) {
  const { elements, values } = this._state;

  // find indexes of shifted and empty elements into puzzles array
  const shiftedElementIndex = elements.puzzles.indexOf(
    elements.puzzles.find(el => el.id === puzzle.id),
  );
  const emptyElementIndex = elements.puzzles.indexOf(
    elements.puzzles.find(el => el.className === "empty"),
  );

  // Border checking
  const isElementsInAOneRow = () => {
    const shiftedElementRowNumber =
      Math.floor(shiftedElementIndex / values.dimension) + 1;
    const emptyElementRowNumber =
      Math.floor(emptyElementIndex / values.dimension) + 1;

    return shiftedElementRowNumber === emptyElementRowNumber;
  };
  if (
    shiftedElementIndex === emptyElementIndex + values.dimension ||
    shiftedElementIndex === emptyElementIndex - values.dimension ||
    (shiftedElementIndex === emptyElementIndex + 1 && isElementsInAOneRow()) ||
    (shiftedElementIndex === emptyElementIndex - 1 && isElementsInAOneRow())
  ) {
    if (values.isAnimation) {
      switch (shiftedElementIndex) {
        case emptyElementIndex + values.dimension: {
          animateSwapping.call(
            this,
            "top",
            shiftedElementIndex,
            emptyElementIndex,
          );
          break;
        }
        case emptyElementIndex - values.dimension: {
          animateSwapping.call(
            this,
            "bottom",
            shiftedElementIndex,
            emptyElementIndex,
          );
          break;
        }
        case emptyElementIndex + 1: {
          animateSwapping.call(
            this,
            "left",
            shiftedElementIndex,
            emptyElementIndex,
          );
          break;
        }
        case emptyElementIndex - 1: {
          animateSwapping.call(
            this,
            "right",
            shiftedElementIndex,
            emptyElementIndex,
          );
          break;
        }
        default: {
          break;
        }
      }
    } else {
      // swap elements
      const extra = elements.puzzles[shiftedElementIndex];
      elements.puzzles[shiftedElementIndex] =
        elements.puzzles[emptyElementIndex];
      elements.puzzles[emptyElementIndex] = extra;

      // clean and rerender of mainArea
      elements.mainArea.innerHTML = "";
      elements.puzzles.forEach(el => {
        elements.mainArea.appendChild(el);
      });
    }

    values.moves += 1;
    elements.moves.textContent = `Moves: ${values.moves}`;

    if (values.isVolumeOn && values.isAnimation) {
      elements.audioMoveAnimation.play();
    } else if (values.isVolumeOn) {
      elements.audioMove.play();
    }

    if (!values.isAnimation) {
      checkPuzzlesIndexesOrder.call(this);
    }
  }
}

export default swapPuzzles;
