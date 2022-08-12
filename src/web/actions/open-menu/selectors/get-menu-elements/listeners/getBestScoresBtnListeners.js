import { openBestScoresMenu } from "../../../menus";

function getBestScoresBtnListeners() {
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
        }

        openBestScoresMenu.call(this);
      },
    },
  ];
}

export default getBestScoresBtnListeners;
