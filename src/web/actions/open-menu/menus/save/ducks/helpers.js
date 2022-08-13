import { DIFFICULTIES } from "constants/settings";

export function setDifficulty() {
  const { elements, values } = this._state;

  switch (elements.difficultySelect.value) {
    case "Digits": {
      values.difficulty = DIFFICULTIES.digits;
      break;
    }
    case "Picture with digits": {
      values.difficulty = DIFFICULTIES.pictureWithDigits;
      break;
    }
    case "Picture only": {
      values.difficulty = DIFFICULTIES.picture;
      break;
    }
    default: {
      break;
    }
  }
}
