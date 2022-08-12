import { updateTime } from "../../../../../actions";

function openHelpMenu() {
  const { elements, values } = this._state;

  if (values.isVolumeOn) {
    elements.audioMenuItemSelect.play();
    elements.audioMenu.play();
    elements.audioMainTheme.pause();
    elements.audioMainTheme.currentTime = 0;
  }
  clearInterval(values.timerId);
  values.isPauseClicked = true;

  const helpMenu = document.createElement("div");
  helpMenu.classList.add("helpMenu");

  const helpMenuTitle = document.createElement("h3");
  helpMenuTitle.classList.add("helpMenuTitle");
  helpMenuTitle.textContent = "Help";
  helpMenu.appendChild(helpMenuTitle);

  const helpText = document.createElement("h3");
  helpText.classList.add("helpText");
  helpText.textContent =
    "You need to place the puzzles (tiles) in order as shown on the image below.";
  helpMenu.appendChild(helpText);

  const helpImage = document.createElement("div");
  helpImage.classList.add("helpImage");

  if (values.difficulty === 2 || values.difficulty === 3) {
    helpImage.style.backgroundImage = `url(./static/media/${values.previousRandomImageName}.jpg)`;
  } else if (values.difficulty === 1) {
    helpImage.style.backgroundImage = `url(./static/media/digits-${values.dimension}.png)`;
  }

  helpMenu.appendChild(helpImage);

  const okBtn = document.createElement("button");
  okBtn.classList.add("okBtn");
  okBtn.textContent = "Ok";
  helpMenu.appendChild(okBtn);

  elements.container.appendChild(helpMenu);

  okBtn.addEventListener("click", () => {
    values.isPauseClicked = false;
    if (values.isVolumeOn) {
      elements.audioMenuItemSelect.play();
      elements.audioMenu.pause();
      elements.audioMenu.currentTime = 0;
      elements.audioMainTheme.play();
    }
    helpMenu.remove();
    updateTime.call(this);
  });

  okBtn.addEventListener("mouseover", () => {
    if (values.isVolumeOn) {
      elements.audioMenuItemHover.play();
    }
  });
}

export default openHelpMenu;
