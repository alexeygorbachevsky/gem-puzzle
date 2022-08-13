import { openMenu } from "../open-menu";

function openModal(text) {
  const { elements, values } = this._state;

  elements.menu.style.display = "none";

  if (elements.savedGamesMenu) {
    elements.savedGamesMenu.remove();
  }

  elements.savedGamesMenu = document.createElement("div");
  elements.savedGamesMenu.classList.add("savedGamesMenu");
  elements.savedGamesMenu.style.justifyContent = "center";

  const noSavedGamesText = document.createElement("h3");
  noSavedGamesText.classList.add("noSavedGamesText");
  noSavedGamesText.textContent = text;
  elements.savedGamesMenu.appendChild(noSavedGamesText);

  const noSavedGamesModalButton = document.createElement("button");
  noSavedGamesModalButton.classList.add("noSavedGamesModalButton");
  noSavedGamesModalButton.textContent = "Ok";
  elements.savedGamesMenu.appendChild(noSavedGamesModalButton);

  elements.container.appendChild(elements.savedGamesMenu);

  noSavedGamesModalButton.addEventListener("click", () => {
    if (values.isVolumeOn) {
      elements.audioMenuItemSelect.play();
    }
    elements.savedGamesMenu.remove();
    openMenu.call(this);
  });

  noSavedGamesModalButton.addEventListener("mouseover", () => {
    if (values.isVolumeOn) {
      elements.audioMenuItemHover.play();
    }
  });
}

export default openModal;
