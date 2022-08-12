import { checkPuzzlesIndexesOrder } from "../../check-puzzles-indexes-order";

function animateSwapping(direction, shiftedElementIndex, emptyElementIndex) {
  const { elements } = this._state;

  let i = 0;
  const puzzleHeight = elements.puzzles[shiftedElementIndex].clientHeight;
  const puzzleWidth = elements.puzzles[shiftedElementIndex].clientWidth;

  if (direction === "top") {
    const timerId = setInterval(() => {
      // 5 - it's a grid gap (margin) between puzzles
      if (i <= puzzleHeight + 5) {
        elements.puzzles[shiftedElementIndex].style.bottom = `${i}px`;
        elements.puzzles[emptyElementIndex].style.top = `${i}px`;
        // Animation step
        i += 2;
      } else {
        clearInterval(timerId);

        elements.puzzles[shiftedElementIndex].style.bottom = `auto`;
        elements.puzzles[emptyElementIndex].style.top = `auto`;

        // swap puzzles places
        const extra = elements.puzzles[shiftedElementIndex];
        elements.puzzles[shiftedElementIndex] =
          elements.puzzles[emptyElementIndex];
        elements.puzzles[emptyElementIndex] = extra;

        // clean and rerender of mainArea
        elements.mainArea.innerHTML = "";
        elements.puzzles.forEach(el => {
          elements.mainArea.appendChild(el);
        });

        checkPuzzlesIndexesOrder.call(this);
      }
    }, 5);
  } else if (direction === "bottom") {
    const timerId = setInterval(() => {
      // 5 - it's a grid gap (margin) between puzzles
      if (i <= puzzleHeight + 5) {
        elements.puzzles[shiftedElementIndex].style.top = `${i}px`;
        elements.puzzles[emptyElementIndex].style.bottom = `${i}px`;
        // Animation step
        i += 2;
      } else {
        clearInterval(timerId);

        elements.puzzles[shiftedElementIndex].style.top = `auto`;
        elements.puzzles[emptyElementIndex].style.bottom = `auto`;

        // swap puzzles places
        const extra = elements.puzzles[shiftedElementIndex];
        elements.puzzles[shiftedElementIndex] =
          elements.puzzles[emptyElementIndex];
        elements.puzzles[emptyElementIndex] = extra;

        // clean and rerender of mainArea
        elements.mainArea.innerHTML = "";
        elements.puzzles.forEach(el => {
          elements.mainArea.appendChild(el);
        });

        checkPuzzlesIndexesOrder.call(this);
      }
    }, 5);
  } else if (direction === "right") {
    const timerId = setInterval(() => {
      // 5 - it's a grid gap (margin) between puzzles
      if (i <= puzzleWidth + 5) {
        elements.puzzles[shiftedElementIndex].style.left = `${i}px`;
        elements.puzzles[emptyElementIndex].style.right = `${i}px`;
        // Animation step
        i += 2;
      } else {
        clearInterval(timerId);

        elements.puzzles[shiftedElementIndex].style.left = `auto`;
        elements.puzzles[emptyElementIndex].style.right = `auto`;

        // swap puzzles places
        const extra = elements.puzzles[shiftedElementIndex];
        elements.puzzles[shiftedElementIndex] =
          elements.puzzles[emptyElementIndex];
        elements.puzzles[emptyElementIndex] = extra;

        // clean and rerender of mainArea
        elements.mainArea.innerHTML = "";
        elements.puzzles.forEach(el => {
          elements.mainArea.appendChild(el);
        });

        checkPuzzlesIndexesOrder.call(this);
      }
    }, 5);
  } else if (direction === "left") {
    const timerId = setInterval(() => {
      // 5 - it's a grid gap (margin) between puzzles
      if (i <= puzzleWidth + 5) {
        elements.puzzles[shiftedElementIndex].style.right = `${i}px`;
        elements.puzzles[emptyElementIndex].style.left = `${i}px`;
        // Animation step
        i += 2;
      } else {
        clearInterval(timerId);

        elements.puzzles[shiftedElementIndex].style.right = `auto`;
        elements.puzzles[emptyElementIndex].style.left = `auto`;

        // swap puzzles places
        const extra = elements.puzzles[shiftedElementIndex];
        elements.puzzles[shiftedElementIndex] =
          elements.puzzles[emptyElementIndex];
        elements.puzzles[emptyElementIndex] = extra;

        // clean and rerender of mainArea
        elements.mainArea.innerHTML = "";
        elements.puzzles.forEach(el => {
          elements.mainArea.appendChild(el);
        });

        checkPuzzlesIndexesOrder.call(this);
      }
    }, 5);
  }
}

export default animateSwapping;
