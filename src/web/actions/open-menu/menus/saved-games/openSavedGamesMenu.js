import { openModal } from "../../../open-modal";
import { backToMenu } from "../../../back-to-menu";
import { loadGame, removeGame, toggleSlider } from "./helpers";

function openSavedGamesMenu() {
  const { elements, values } = this._state;

  values.currentScreenShotId = 0;

  values.savedGames = JSON.parse(localStorage.getItem("savedGames"));

  if (!values.savedGames) {
    values.savedGames = [];
  }

  // Modal window appears if no existing saved games
  if (!values.savedGames.length) {
    openModal.call(this, `You don't have any saved games`);

    return;
  }

  elements.menu.style.display = "none";

  elements.savedGamesMenu = document.createElement("div");
  elements.savedGamesMenu.classList.add("savedGamesMenu");
  elements.savedGamesMenu.style.justifyContent = "space-evenly";

  elements.savedGamesMenuTitleWrapper = document.createElement("div");
  elements.savedGamesMenuTitleWrapper.classList.add(
    "savedGamesMenuTitleWrapper",
  );
  elements.savedGamesMenuTitle = document.createElement("h3");
  elements.savedGamesMenuTitle.classList.add("savedGamesMenuTitle");
  elements.savedGamesMenuTitle.textContent = `Saved Games: ${
    values.currentScreenShotId + 1
  }/${values.savedGames.length}`;

  elements.savedGamesMenuTitleWrapper.appendChild(elements.savedGamesMenuTitle);
  elements.savedGamesMenu.appendChild(elements.savedGamesMenuTitleWrapper);

  for (let i = 0; i < values.savedGames.length; i += 1) {
    elements.screenShots[i] = document.createElement("div");
    elements.screenShots[i].classList.add("screen");
    elements.screenShots[i].id = i;
    // insert screen into Saved Games Menu
    elements.screenShots[i].insertAdjacentHTML(
      "afterBegin",
      values.savedGames[i].screenShot,
    );
  }

  elements.slider = document.createElement("div");
  elements.slider.classList.add("slider");

  elements.angleLeft = document.createElement("div");
  elements.angleLeft.classList.add("angles", "angle-left");
  elements.angleLeft.innerHTML = '<i class="fas fa-chevron-left"></i>';
  elements.angleLeft.addEventListener("click", () => {
    toggleSlider.call(this, "left");
  });
  elements.slider.appendChild(elements.angleLeft);

  elements.slider.appendChild(elements.screenShots[0]);

  elements.angleRight = document.createElement("div");
  elements.angleRight.innerHTML = '<i class="fas fa-chevron-right"></i>';
  elements.angleRight.classList.add("angles", "angle-right");
  elements.angleRight.addEventListener("click", () => {
    toggleSlider.call(this, "right");
  });
  elements.slider.appendChild(elements.angleRight);

  if (values.savedGames.length === 1) {
    elements.angleRight.style.opacity = "0.4";
    elements.angleLeft.style.opacity = "0.4";
  }

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

  // Back button
  elements.backButton = document.createElement("h3");
  elements.backButton.classList.add("backButton");
  elements.backButton.textContent = "Back";
  elements.backButton.addEventListener("click", () => {
    if (values.isVolumeOn) {
      elements.audioMenuItemSelect.play();
    }
    backToMenu.call(this, elements.savedGamesMenu);
  });
  elements.backButton.addEventListener("mouseover", () => {
    if (values.isVolumeOn) {
      elements.audioMenuItemHover.play();
    }
  });

  elements.savedGamesMenu.appendChild(elements.slider);
  elements.savedGamesMenu.appendChild(elements.savedGamesMenuButtonsWrapper);
  elements.savedGamesMenu.appendChild(elements.backButton);
  elements.container.appendChild(elements.savedGamesMenu);
}

export default openSavedGamesMenu;
