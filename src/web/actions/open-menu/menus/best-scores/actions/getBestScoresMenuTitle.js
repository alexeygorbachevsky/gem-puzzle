function getBestScoresMenuTitle() {
  const bestScoresMenuTitle = document.createElement("h3");
  bestScoresMenuTitle.classList.add("bestScoresMenuTitle");
  bestScoresMenuTitle.textContent = "Best Scores";

  return bestScoresMenuTitle;
}

export default getBestScoresMenuTitle;
