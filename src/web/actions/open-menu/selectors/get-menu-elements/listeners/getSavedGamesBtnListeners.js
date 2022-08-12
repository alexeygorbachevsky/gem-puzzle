import { openSavedGamesMenu } from "../../../menus";

function getContinueGameListeners() {
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

        openSavedGamesMenu.call(this);
      },
    },
  ];
}

export default getContinueGameListeners;
