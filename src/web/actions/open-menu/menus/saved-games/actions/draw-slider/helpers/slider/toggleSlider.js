function toggleSlider(direction) {
  const { elements, values } = this._state;

  if (
    direction === "right" &&
    values.currentScreenShotId < values.savedGames.length - 1
  ) {
    if (values.isVolumeOn) {
      elements.audioMenuItemSelect.play();
    }

    elements.screenShots[Number(values.currentScreenShotId)].replaceWith(
      elements.screenShots[Number(values.currentScreenShotId) + 1],
    );

    values.currentScreenShotId += 1;

    if (values.currentScreenShotId === values.savedGames.length - 1) {
      elements.angleRight.style.opacity = "0.4";
    }

    if (values.currentScreenShotId > 0) {
      elements.angleLeft.style.opacity = "1";
    }
  }

  if (direction === "left" && values.currentScreenShotId > 0) {
    if (values.isVolumeOn) {
      elements.audioMenuItemSelect.play();
    }

    elements.screenShots[Number(values.currentScreenShotId)].replaceWith(
      elements.screenShots[Number(values.currentScreenShotId) - 1],
    );

    values.currentScreenShotId -= 1;

    if (values.currentScreenShotId < values.savedGames.length - 1) {
      elements.angleRight.style.opacity = "1";
    }

    if (values.currentScreenShotId === 0) {
      elements.angleLeft.style.opacity = "0.4";
    }
  }

  elements.savedGamesMenuTitle.textContent = `Saved Games: ${
    values.currentScreenShotId + 1
  }/${values.savedGames.length}`;
}

export default toggleSlider;
