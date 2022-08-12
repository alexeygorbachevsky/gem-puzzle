import { updateTime } from "../../../../update-time";

function getContinueGameBtnListeners() {
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
        if (values.isVolumeOn) {
          elements.audioMenuItemSelect.play();
          elements.audioMenu.pause();
          elements.audioMenu.currentTime = 0;
          elements.audioMainTheme.play();
        }
        values.isPauseClicked = false;

        elements.menu.remove();
        updateTime.call(this);
      },
    },
  ];
}

export default getContinueGameBtnListeners;
