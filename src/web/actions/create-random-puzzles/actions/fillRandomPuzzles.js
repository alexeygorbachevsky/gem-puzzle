import { DIFFICULTIES } from "constants/settings";

function fillRandomPuzzles(randomIndexes) {
  const { elements, values } = this._state;

  for (let i = 0; i < randomIndexes.length; i += 1) {
    elements.puzzles[i] = document.createElement("div");

    if (randomIndexes[i] + 1 === randomIndexes.length) {
      elements.puzzles[i].classList.add("empty");
      elements.puzzles[i].id = values.dimension * values.dimension;
      elements.mainArea.appendChild(elements.puzzles[i]);

      continue;
    }

    elements.puzzles[i].classList.add("puzzle");
    elements.puzzles[i].id = randomIndexes[i] + 1;

    if (
      values.difficulty === DIFFICULTIES.digits ||
      values.difficulty === DIFFICULTIES.pictureWithDigits
    ) {
      elements.puzzles[i].textContent = randomIndexes[i] + 1;
    }

    if (
      values.difficulty === DIFFICULTIES.pictureWithDigits ||
      values.difficulty === DIFFICULTIES.picture
    ) {
      elements.puzzles[
        i
      ].style.backgroundImage = `url('./static/media/${values.randomImageName}.jpg')`;
      elements.puzzles[i].style.backgroundRepeat = `no-repeat`;
      const puzzleWidth = elements.mainArea.clientWidth / values.dimension;
      const puzzleHeight = elements.mainArea.clientHeight / values.dimension;
      const left = puzzleWidth * (randomIndexes[i] % values.dimension);
      const top =
        puzzleHeight * Math.floor(randomIndexes[i] / values.dimension);
      elements.puzzles[
        i
      ].style.backgroundSize = `${elements.mainArea.clientWidth}px ${elements.mainArea.clientHeight}px`;
      elements.puzzles[i].style.backgroundPosition = `-${left}px -${top}px`;
    }

    elements.mainArea.appendChild(elements.puzzles[i]);
  }
}

export default fillRandomPuzzles;
