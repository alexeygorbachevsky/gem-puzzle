import { loadGame, removeGame } from "./helpers";

function drawSavedGamesMenuButtonWrapper() {
  const { elements, values } = this._state;

  elements.savedGamesMenuButtonsWrapper = document.createElement("div");
  elements.savedGamesMenuButtonsWrapper.classList.add(
    "savedGamesMenuButtonsWrapper",
  );

  elements.loadButton = document.createElement("button");
  elements.loadButton.classList.add("loadButton");
  elements.loadButton.textContent = `Load`;

  elements.loadButton.addEventListener("click", () => {
    if (values.isVolumeOn) {
      elements.audioMenuItemSelect.play();
    }
    loadGame.call(this);
  });

  elements.loadButton.addEventListener("mouseover", () => {
    if (values.isVolumeOn) {
      elements.audioMenuItemHover.play();
    }
  });

  elements.savedGamesMenuButtonsWrapper.appendChild(elements.loadButton);

  elements.removeButton = document.createElement("button");
  elements.removeButton.classList.add("removeButton");
  elements.removeButton.textContent = "Remove";

  elements.removeButton.addEventListener("click", () => {
    if (values.isVolumeOn) {
      elements.audioMenuItemSelect.play();
    }
    removeGame.call(this);
  });

  elements.removeButton.addEventListener("mouseover", () => {
    if (values.isVolumeOn) {
      elements.audioMenuItemHover.play();
    }
  });

  elements.savedGamesMenuButtonsWrapper.appendChild(elements.removeButton);
}

export default drawSavedGamesMenuButtonWrapper;
