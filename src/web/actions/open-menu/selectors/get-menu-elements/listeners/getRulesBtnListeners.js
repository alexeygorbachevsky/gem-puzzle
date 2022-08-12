import { openRulesMenu } from "../../../menus";

function getRulesBtnListeners() {
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

        openRulesMenu.call(this);
      },
    },
  ];
}

export default getRulesBtnListeners;
