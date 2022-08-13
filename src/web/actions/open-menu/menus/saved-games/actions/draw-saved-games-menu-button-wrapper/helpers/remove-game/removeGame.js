import { openModal } from "../../../../../../../open-modal";

function removeGame() {
  const { elements, values } = this._state;

  const removedScreenShot = elements.screenShots.find(
    el => Number(el.id) === values.currentScreenShotId,
  );

  elements.screenShots = elements.screenShots.filter(
    el => Number(el.id) !== values.currentScreenShotId,
  );

  values.savedGames = values.savedGames.filter((el, index) => {
    if (index !== values.currentScreenShotId) {
      return el;
    }
    return null;
  });

  if (
    values.currentScreenShotId !== 0 &&
    values.currentScreenShotId !== elements.screenShots.length - 1
  ) {
    values.currentScreenShotId -= 1;
  }

  if (!values.savedGames.length) {
    openModal.call(this, `All saved games are successfully removed`);
    localStorage.removeItem("savedGames");
    localStorage.setItem("savedGames", JSON.stringify(values.savedGames));

    return;
  }

  removedScreenShot.replaceWith(
    elements.screenShots[values.currentScreenShotId],
  );

  for (let i = 0; i < elements.screenShots.length; i += 1) {
    elements.screenShots[i].id = i;
  }

  elements.savedGamesMenuTitle.textContent = `Saved Games: ${
    values.currentScreenShotId + 1
  }/${values.savedGames.length}`;

  if (values.currentScreenShotId === 0) {
    elements.angleLeft.style.opacity = "0.4";
  }

  if (values.currentScreenShotId === values.savedGames.length - 1) {
    elements.angleRight.style.opacity = "0.4";
  }

  localStorage.removeItem("savedGames");
  localStorage.setItem("savedGames", JSON.stringify(values.savedGames));
}

export default removeGame;
