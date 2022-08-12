import { backToMenu } from "../../../../../back-to-menu";

function initiateBackButton() {
  const { elements, values } = this._state;

  elements.backButton = document.createElement("h3");
  elements.backButton.classList.add("backButton");
  elements.backButton.textContent = "Back";

  elements.backButton.addEventListener("click", () => {
    if (values.isVolumeOn) {
      elements.audioMenuItemSelect.play();
    }
    backToMenu.call(this, elements.rulesMenu);
  });

  elements.backButton.addEventListener("mouseover", () => {
    if (values.isVolumeOn) {
      elements.audioMenuItemHover.play();
    }
  });
}

export default initiateBackButton;
