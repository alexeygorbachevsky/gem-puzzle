import { DIFFICULTIES } from "constants/settings";

function createSortedPuzzles() {
  const { elements, values } = this._state;

  const puzzlesCount = values.dimension * values.dimension;

  for (let i = 0; i < puzzlesCount; i += 1) {
    elements.puzzles[i] = document.createElement("div");
    elements.puzzles[i].id = i + 1;

    if (i === puzzlesCount - 1) {
      elements.puzzles[i].classList.add("empty");
      elements.mainArea.appendChild(elements.puzzles[i]);

      continue;
    }

    elements.puzzles[i].classList.add("puzzle");

    if (
      values.difficulty === DIFFICULTIES.digits ||
      values.difficulty === DIFFICULTIES.pictureWithDigits
    ) {
      elements.puzzles[i].textContent = i + 1;
    }

    if (
      values.difficulty === DIFFICULTIES.pictureWithDigits ||
      values.difficulty === DIFFICULTIES.picture
    ) {
      // Assemble of image
      elements.puzzles[
        i
      ].style.backgroundImage = `url('./static/media/${values.randomImageName}.jpg')`;
      elements.puzzles[i].style.backgroundRepeat = `no-repeat`;
      const puzzleWidth = elements.mainArea.clientWidth / values.dimension;
      const puzzleHeight = elements.mainArea.clientHeight / values.dimension;
      const left = puzzleWidth * (i % values.dimension);
      const top = puzzleHeight * Math.floor(i / values.dimension);
      elements.puzzles[
        i
      ].style.backgroundSize = `${elements.mainArea.clientWidth}px ${elements.mainArea.clientHeight}px`;
      elements.puzzles[i].style.backgroundPosition = `-${left}px -${top}px`;
    }

    elements.mainArea.appendChild(elements.puzzles[i]);
  }
}

export default createSortedPuzzles;
