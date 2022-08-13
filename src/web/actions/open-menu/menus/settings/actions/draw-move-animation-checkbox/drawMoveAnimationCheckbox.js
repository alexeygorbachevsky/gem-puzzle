function drawMoveAnimationCheckbox(moveAnimationWrapper) {
  const { elements, values } = this._state;

  const moveAnimationText = document.createElement("p");
  moveAnimationText.classList.add("moveAnimationText");
  moveAnimationText.textContent = "Move Animation";

  const moveAnimationLabel = document.createElement("label");
  moveAnimationLabel.classList.add("switch");

  elements.moveAnimationCheckbox = document.createElement("input");
  elements.moveAnimationCheckbox.type = "checkbox";
  elements.moveAnimationCheckbox.classList.add("checkbox");
  elements.moveAnimationCheckbox.setAttribute("checked", "");

  const moveAnimationSpan = document.createElement("span");
  moveAnimationSpan.classList.add("slider", "round");
  moveAnimationLabel.append(elements.moveAnimationCheckbox, moveAnimationSpan);

  moveAnimationWrapper.append(moveAnimationText, moveAnimationLabel);

  elements.moveAnimationCheckbox.checked = values.isAnimation;
}

export default drawMoveAnimationCheckbox;
