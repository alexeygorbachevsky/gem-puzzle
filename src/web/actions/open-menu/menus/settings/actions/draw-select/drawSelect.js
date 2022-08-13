import { drawSelectConstants } from "./ducks";

const { OPTIONS } = drawSelectConstants;

function drawSelect(boardSizeWrapper) {
  const { elements, values } = this._state;

  const boardSizeText = document.createElement("p");
  boardSizeText.classList.add("boardSizeText");
  boardSizeText.textContent = "Board Size";

  elements.boardSizeSelect = document.createElement("select");
  elements.boardSizeSelect.classList.add("boardSizeSelect");

  const options = OPTIONS.map(optionText => {
    const option = document.createElement("option");
    option.classList.add("option");
    option.textContent = optionText;

    return option;
  });

  elements.boardSizeSelect.append(...options);

  boardSizeWrapper.append(boardSizeText, elements.boardSizeSelect);

  const boardSizeOptionValue = `${values.dimension}x${values.dimension}`;
  for (let i = 0; i < elements.boardSizeSelect.options.length; i += 1) {
    if (elements.boardSizeSelect.options[i].value === boardSizeOptionValue) {
      elements.boardSizeSelect.options[i].setAttribute("selected", "");
    }
  }
}

export default drawSelect;
