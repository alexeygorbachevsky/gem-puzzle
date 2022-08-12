import { openModal } from "../../../../open-modal";

function getSaveGameBtnListeners() {
  const { values, elements } = this._state;
  return [
    {
      event: "mouseover",
      cb: () => {
        if (values.isVolumeOn) {
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
        }

        const savedGames = JSON.parse(localStorage.getItem("savedGames"));

        if (savedGames) {
          values.savedGames = savedGames;
        }

        if (values.savedGames.length >= values.maxSavedGamesCount) {
          openModal.call(
            this,
            `Max saved games count should not exceed ${values.maxSavedGamesCount}`,
          );

          return;
        }

        elements.screenShot = elements.container.cloneNode(true);

        const puzzlesIndexesOrder = elements.puzzles.map(
          el => Number(el.id) - 1,
        );

        values.savedGames.push({
          time: values.time,
          minutes: values.minutes,
          seconds: values.seconds,
          moves: values.moves,
          screenShot: elements.screenShot.innerHTML,
          puzzlesIndexesOrder,
          dimension: values.dimension,
          backgroundImageName: values.previousRandomImageName,
          mode: values.difficulty,
        });

        localStorage.removeItem("savedGames");
        localStorage.setItem("savedGames", JSON.stringify(values.savedGames));

        openModal.call(this, `The game was saved successfully`);
      },
    },
  ];
}

export default getSaveGameBtnListeners;
