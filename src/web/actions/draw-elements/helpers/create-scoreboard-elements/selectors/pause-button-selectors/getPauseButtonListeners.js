import { openMenu } from "../../../../../index";

function getPauseButtonListeners() {
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
          elements.audioMenu.play();
          elements.audioMainTheme.pause();
          elements.audioMainTheme.currentTime = 0;
        }

        clearInterval(values.timerId);
        values.isPauseClicked = true;
        openMenu.call(this);
      },
    },
  ];
}

export default getPauseButtonListeners;
