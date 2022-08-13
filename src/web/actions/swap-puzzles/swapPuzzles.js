import { getIsElementsInOneRow } from "helpers";

import { checkPuzzlesIndexesOrder } from "../check-puzzles-indexes-order";
import { animateSwapping } from "./actions";

function swapPuzzles(puzzle) {
  const { elements, values } = this._state;

  const shiftedElementIndex = elements.puzzles.findIndex(
    el => el.id === puzzle.id,
  );
  const emptyElementIndex = elements.puzzles.findIndex(
    el => el.className === "empty",
  );

  const isElementsInOneRow = getIsElementsInOneRow({
    values,
    currentPuzzleIndex: shiftedElementIndex,
    emptyElementIndex,
  });

  if (
    shiftedElementIndex === emptyElementIndex + values.dimension ||
    shiftedElementIndex === emptyElementIndex - values.dimension ||
    (shiftedElementIndex === emptyElementIndex + 1 && isElementsInOneRow) ||
    (shiftedElementIndex === emptyElementIndex - 1 && isElementsInOneRow)
  ) {
    if (values.isAnimation) {
      let direction;
      switch (shiftedElementIndex) {
        case emptyElementIndex + values.dimension: {
          direction = "top";
          break;
        }
        case emptyElementIndex - values.dimension: {
          direction = "bottom";
          break;
        }
        case emptyElementIndex + 1: {
          direction = "left";
          break;
        }
        case emptyElementIndex - 1: {
          direction = "right";
          break;
        }
        default: {
          break;
        }
      }

      if (direction) {
        animateSwapping.call(
          this,
          direction,
          shiftedElementIndex,
          emptyElementIndex,
        );
      }
    } else {
      const extra = elements.puzzles[shiftedElementIndex];
      elements.puzzles[shiftedElementIndex] =
        elements.puzzles[emptyElementIndex];
      elements.puzzles[emptyElementIndex] = extra;

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
