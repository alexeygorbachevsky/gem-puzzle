import {
  drawBestScoresResults,
  getBestScoresMenuGrid,
  drawBestScoresButtons,
  getBestScoresMenuTitle,
  getBestScores,
} from "./actions";

function openBestScoresMenu() {
  const { elements, values } = this._state;

  getBestScores.call(this);

  elements.menu.style.display = "none";
  elements.bestScoresMenu = document.createElement("div");
  elements.bestScoresMenu.classList.add("bestScoresMenu");

  drawBestScoresButtons.call(this, openBestScoresMenu);

  const bestScoresMenuGrid = getBestScoresMenuGrid();
  const bestScoresMenuTitle = getBestScoresMenuTitle();

  elements.bestScoresMenu.append(
    bestScoresMenuTitle,
    bestScoresMenuGrid,
    elements.clearBestScoresBtn,
    elements.backButton,
  );
  elements.container.appendChild(elements.bestScoresMenu);

  drawBestScoresResults.call(this, bestScoresMenuGrid);

  bestScoresMenuGrid.style.gridTemplateRows = `repeat(${
    values.bestScores.length + 1
  }, 1fr)`;
}

export default openBestScoresMenu;
