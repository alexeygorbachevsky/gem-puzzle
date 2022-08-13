import { checkPuzzlesIndexesOrder } from "../../../check-puzzles-indexes-order";
import { applyStyles } from "./actions";

function animateSwapping(direction, shiftedElementIndex, emptyElementIndex) {
  const { elements } = this._state;

  let i = 0;
  const puzzleHeight = elements.puzzles[shiftedElementIndex].clientHeight;
  const puzzleWidth = elements.puzzles[shiftedElementIndex].clientWidth;

  const timerId = setInterval(() => {
    const to =
      direction === "top" || direction === "bottom"
        ? puzzleHeight
        : puzzleWidth;
    if (i <= to + 5) {
      applyStyles.call(this, {
        direction,
        i,
        shiftedElementIndex,
        emptyElementIndex,
      });
      i += 2;
    } else {
      clearInterval(timerId);

      applyStyles.call(this, {
        direction,
        i,
        shiftedElementIndex,
        emptyElementIndex,
        isAuto: true,
      });

      const extra = elements.puzzles[shiftedElementIndex];
      elements.puzzles[shiftedElementIndex] =
        elements.puzzles[emptyElementIndex];
      elements.puzzles[emptyElementIndex] = extra;

      elements.mainArea.innerHTML = "";
      elements.puzzles.forEach(el => {
        elements.mainArea.appendChild(el);
      });

      checkPuzzlesIndexesOrder.call(this);
    }
  }, 5);
}

export default animateSwapping;
