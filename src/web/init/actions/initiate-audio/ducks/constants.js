import { getRandomNumber } from "helpers";

export const AUDIO_ELEMENTS = [
  {
    name: "audioMove",
    classList: "audioMove",
    src: "./static/media/move.mp3",
  },
  {
    name: "audioDragMove",
    classList: "audioDragMove",
    src: "./static/media/drag-move.mp3",
  },
  {
    name: "audioWin",
    classList: "audioWin",
    src: "./static/media/win.mp3",
  },
  {
    name: "audioMoveAnimation",
    classList: "audioMoveAnimation",
    src: "./static/media/move-animation.mp3",
  },
  {
    name: "audioMenuItemHover",
    classList: "audioMenuItemHover",
    src: "./static/media/hover-menu-item.mp3",
  },
  {
    name: "audioMenuItemSelect",
    classList: "audioMenuItemSelect",
    src: "./static/media/select-menu-item.mp3",
  },
  {
    name: "audioMenu",
    classList: "audioMenu",
    src: "./static/media/menu.mp3",
  },
  {
    name: "audioMainTheme",
    classList: "audioMainTheme",
    src: `./static/media/${getRandomNumber(1, 7)}.mp3`,
  },
];
