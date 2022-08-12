import { openModal } from "../../../../open-modal";

function drawBestScoresResults(bestScoresMenuGrid) {
  const { values, elements } = this._state;

  if (!values.bestScores.length) {
    elements.bestScoresMenu.remove();
    openModal.call(this, "You don't have any results yet");

    return;
  }

  for (let i = 0; i < values.bestScores.length; i += 1) {
    const id = document.createElement("div");
    id.classList.add("bestScoresMenuGridID");
    id.textContent = `${i + 1}`;

    const size = document.createElement("div");
    size.classList.add("bestScoresMenuGridBoardSize");
    size.textContent = `${values.bestScores[i].boardSize}x${values.bestScores[i].boardSize}`;

    const time = document.createElement("div");
    time.classList.add("bestScoresMenuGridTime");
    time.textContent = `${values.bestScores[i].time}`;

    const moves = document.createElement("div");
    moves.classList.add("bestScoresMenuGridMoves");
    moves.textContent = `${values.bestScores[i].movesCount}`;

    const grid = document.querySelector(".bestScoresMenuGrid");
    grid.append(id, size, time, moves);

    elements.bestScoresMenu.appendChild(bestScoresMenuGrid);
  }
}

export default drawBestScoresResults;
