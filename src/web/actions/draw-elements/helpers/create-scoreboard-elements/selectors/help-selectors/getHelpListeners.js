import { openHelpMenu } from "../../../../actions";

function getHelpListeners() {
  const { elements, values } = this._state;

  return [
    {
      event: "click",
      cb: () => {
        if (values.isVolumeOn) {
          elements.audioMenuItemSelect.play();
        }
        openHelpMenu.call(this);
      },
    },
  ];
}

export default getHelpListeners;
