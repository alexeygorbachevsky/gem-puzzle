import { DIFFICULTIES } from "constants/settings";

import { drawDifficultySelectSelectConstants } from "./ducks";

const { OPTIONS } = drawDifficultySelectSelectConstants;

function drawDifficultySelect(difficultyWrapper) {
  const { elements, values } = this._state;

  const difficultyText = document.createElement("p");
  difficultyText.classList.add("difficultyText");
  difficultyText.textContent = "Difficulty";

  elements.difficultySelect = document.createElement("select");
  elements.difficultySelect.classList.add("difficultySelect");

  const options = OPTIONS.map(optionText => {
    const option = document.createElement("option");
    option.classList.add("option");
    option.textContent = optionText;

    return option;
  });

  elements.difficultySelect.append(...options);
  difficultyWrapper.append(difficultyText, elements.difficultySelect);

  switch (values.difficulty) {
    case DIFFICULTIES.digits: {
      elements.difficultySelect.options[0].setAttribute("selected", "");
      break;
    }
    case DIFFICULTIES.pictureWithDigits: {
      elements.difficultySelect.options[1].setAttribute("selected", "");
      break;
    }
    case DIFFICULTIES.picture: {
      elements.difficultySelect.options[2].setAttribute("selected", "");
      break;
    }
    default: {
      break;
    }
  }
}

export default drawDifficultySelect;
