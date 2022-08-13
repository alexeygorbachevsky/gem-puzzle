import { openModal } from "../../../../../open-modal";

function initSavedGamesMenu() {
  const { elements, values } = this._state;

  values.currentScreenShotId = 0;
  values.savedGames = JSON.parse(localStorage.getItem("savedGames"));

  if (!values.savedGames) {
    values.savedGames = [];
  }

  if (!values.savedGames.length) {
    openModal.call(this, "You don't have any saved games");

    return false;
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

    elements.screenShots[i].insertAdjacentHTML(
      "afterBegin",
      values.savedGames[i].screenShot,
    );
  }

  return true;
}

export default initSavedGamesMenu;
