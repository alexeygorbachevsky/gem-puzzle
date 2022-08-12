import { createWinMenu } from "./actions";

function checkPuzzlesIndexesOrder() {
  const { elements, values } = this._state;

  const isRightOrder = elements.puzzles.every(
    (el, ind) => Number(el.id) === ind + 1,
  );

  if (isRightOrder) {
    clearInterval(values.timerId);

    elements.audioMainTheme.pause();
    elements.audioMainTheme.currentTime = 0;

    createWinMenu.call(this);

    if (values.isVolumeOn) {
      elements.audioWin.play();
    }

    // Best Scores record
    const bestScores = JSON.parse(localStorage.getItem("bestScores"));

    if (bestScores) {
      values.bestScores = bestScores;
    }

    if (values.bestScores.length === values.maxBestScoresCount) {
      let worstResult = null;
      let worstResultIndex = null;

      values.bestScores.forEach((el, index) => {
        if (index === 0 || el.movesCount > worstResult) {
          worstResult = el.movesCount;
          worstResultIndex = index;
        }
      });

      if (values.moves < values.bestScores[worstResultIndex].movesCount) {
        values.bestScores[worstResultIndex] = {
          time: values.time,
          movesCount: values.moves,
          boardSize: values.dimension,
        };
      }
    } else if (values.bestScores.length < values.maxBestScoresCount) {
      values.bestScores.push({
        time: values.time,
        movesCount: values.moves,
        boardSize: values.dimension,
      });
    }

    values.bestScores = values.bestScores.sort(
      (a, b) => a.movesCount - b.movesCount,
    );

    localStorage.removeItem("bestScores");
    localStorage.setItem("bestScores", JSON.stringify(values.bestScores));
  }
}

export default checkPuzzlesIndexesOrder;
