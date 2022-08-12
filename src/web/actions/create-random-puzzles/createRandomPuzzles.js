import { createRandomPuzzlesHelpers } from "./ducks";
import { fillRandomPuzzles } from "./actions";

const { getRandomIndexes } = createRandomPuzzlesHelpers;

function createRandomPuzzles() {
  const { elements, values } = this._state;

  elements.mainArea.innerHTML = "";
  elements.puzzles = [];

  let randomIndexes;

  if (values.isLoad) {
    randomIndexes =
      values.savedGames[values.currentScreenShotId].puzzlesIndexesOrder;
  } else {
    randomIndexes = getRandomIndexes(values.dimension, values.isLoad);
  }

  fillRandomPuzzles.call(this, randomIndexes);
}

export default createRandomPuzzles;
