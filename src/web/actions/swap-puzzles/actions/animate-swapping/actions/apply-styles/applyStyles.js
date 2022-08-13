function applyStyles({
  direction,
  i,
  shiftedElementIndex,
  emptyElementIndex,
  isAuto = false,
}) {
  const { elements } = this._state;

  switch (direction) {
    case "top": {
      elements.puzzles[shiftedElementIndex].style.bottom = isAuto
        ? "auto"
        : `${i}px`;
      elements.puzzles[emptyElementIndex].style.top = isAuto
        ? "auto"
        : `${i}px`;
      break;
    }
    case "bottom": {
      elements.puzzles[shiftedElementIndex].style.top = isAuto
        ? "auto"
        : `${i}px`;
      elements.puzzles[emptyElementIndex].style.bottom = isAuto
        ? "auto"
        : `${i}px`;
      break;
    }
    case "right": {
      elements.puzzles[shiftedElementIndex].style.left = isAuto
        ? "auto"
        : `${i}px`;
      elements.puzzles[emptyElementIndex].style.right = isAuto
        ? "auto"
        : `${i}px`;
      break;
    }
    case "left": {
      elements.puzzles[shiftedElementIndex].style.right = isAuto
        ? "auto"
        : `${i}px`;
      elements.puzzles[emptyElementIndex].style.left = isAuto
        ? "auto"
        : `${i}px`;
      break;
    }
    default: {
      break;
    }
  }
}

export default applyStyles;
