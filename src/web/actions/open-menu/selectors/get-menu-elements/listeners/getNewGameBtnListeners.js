import { getRandomNumber } from "helpers";

import { createRandomPuzzles } from "../../../../create-random-puzzles";
import { initiatePuzzles } from "../../../../initiate-puzzles";
import { initiateDragNDrop } from "../../../../drag-n-drop";
import { startGame } from "../../../../start-game";

function getNewGameBtnListeners() {
  const { values, elements } = this._state;

  return [
    {
      event: "mouseover",
      cb: () => {
        if (values.isVolumeOn && values.isMenuItemClicked) {
          elements.audioMenuItemHover.play();
        }
      },
    },
    {
      event: "click",
      cb: () => {
        values.isMenuItemClicked = true;

        if (values.isVolumeOn) {
          elements.audioMenuItemSelect.play();
          elements.audioMenu.pause();
          elements.audioMenu.currentTime = 0;
        }

        if (values.isPauseClicked) {
          const randomMainThemeAudio = getRandomNumber(1, 7);

          elements.audioMainTheme.remove();
          elements.audioMainTheme = document.createElement("audio");
          elements.audioMainTheme.classList.add("audioMainTheme");
          const audioMainThemeSource = document.createElement("source");
          audioMainThemeSource.src = `./static/media/${randomMainThemeAudio}.mp3`;
          elements.audioMainTheme.appendChild(audioMainThemeSource);
          elements.audioMainTheme.setAttribute("loop", "");
          document.body.appendChild(elements.audioMainTheme);
        }

        if (values.isVolumeOn) {
          elements.audioMainTheme.play();
          elements.audioMainTheme.volume = 1;
        } else {
          elements.audioMainTheme.volume = 0;
          elements.audioMainTheme.play();
        }

        // Reset time
        values.time = "00:00";
        values.seconds = 0;
        values.minutes = 0;
        elements.time.textContent = `Time:${values.time}`;

        // Reset moves
        values.moves = 0;
        elements.moves.textContent = `Moves: ${values.moves}`;

        values.isPauseClicked = false;

        createRandomPuzzles.call(this);
        initiatePuzzles.call(this);
        initiateDragNDrop.call(this);
        startGame.call(this);
      },
    },
  ];
}

export default getNewGameBtnListeners;
