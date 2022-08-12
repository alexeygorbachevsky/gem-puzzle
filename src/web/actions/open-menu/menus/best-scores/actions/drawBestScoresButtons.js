import { backToMenu } from "../../../../back-to-menu";

function drawBestScoresButtons(openBestScoresMenu) {
  const { values, elements } = this._state;

  elements.clearBestScoresBtn = document.createElement("button");
  elements.clearBestScoresBtn.classList.add("clearBestScoresBtn");
  elements.clearBestScoresBtn.textContent = `Clear all`;
  elements.clearBestScoresBtn.addEventListener("click", () => {
    if (values.isVolumeOn) {
      elements.audioMenuItemSelect.play();
    }

    localStorage.removeItem("bestScores");
    values.bestScores = [];
    elements.bestScoresMenu.remove();
    openBestScoresMenu.call(this);
  });

  elements.clearBestScoresBtn.addEventListener("mouseover", () => {
    if (values.isVolumeOn) {
      elements.audioMenuItemHover.play();
    }
  });

  elements.backButton = document.createElement("h3");
  elements.backButton.classList.add("backButton");
  elements.backButton.textContent = "Back";

  elements.backButton.addEventListener("click", () => {
    if (values.isVolumeOn) {
      elements.audioMenuItemSelect.play();
    }
    backToMenu.call(this, elements.bestScoresMenu);
  });

  elements.backButton.addEventListener("mouseover", () => {
    if (values.isVolumeOn) {
      elements.audioMenuItemHover.play();
    }
  });
}

export default drawBestScoresButtons;
