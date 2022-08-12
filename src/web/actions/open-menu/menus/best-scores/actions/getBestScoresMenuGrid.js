function getBestScoresMenuGrid() {
  const bestScoresMenuGrid = document.createElement("div");
  bestScoresMenuGrid.classList.add("bestScoresMenuGrid");

  const bestScoresMenuGridID = document.createElement("div");
  bestScoresMenuGridID.classList.add("bestScoresMenuGridID");
  bestScoresMenuGridID.textContent = "Id";

  const bestScoresMenuGridBoardSize = document.createElement("div");
  bestScoresMenuGridBoardSize.classList.add("bestScoresMenuGridBoardSize");
  bestScoresMenuGridBoardSize.textContent = "Size";

  const bestScoresMenuGridTime = document.createElement("div");
  bestScoresMenuGridTime.classList.add("bestScoresMenuGridTime");
  bestScoresMenuGridTime.textContent = "Time";

  const bestScoresMenuGridMoves = document.createElement("div");
  bestScoresMenuGridMoves.classList.add("bestScoresMenuGridMoves");
  bestScoresMenuGridMoves.textContent = "Moves";

  bestScoresMenuGrid.append(
    bestScoresMenuGridID,
    bestScoresMenuGridBoardSize,
    bestScoresMenuGridTime,
    bestScoresMenuGridMoves,
  );

  return bestScoresMenuGrid;
}

export default getBestScoresMenuGrid;
