import { initiateAudioConstants } from "./ducks";

const { AUDIO_ELEMENTS } = initiateAudioConstants;

function initiateAudio() {
  const { elements, values } = this._state;
  for (const { name, classList, src } of AUDIO_ELEMENTS) {
    elements[name] = document.createElement("audio");
    elements[name].classList.add(classList);
    const source = document.createElement("source");
    source.src = src;

    // TODO: uncomment
    // if (name === "audioMenu" && values.isVolumeOn) {
    //   elements[name].setAttribute("autoplay", "");
    // }

    elements[name].appendChild(source);

    if (name === "audioMenu" || name === "audioMainTheme") {
      elements[name].setAttribute("loop", "");
    }

    document.body.appendChild(elements[name]);
  }
}

export default initiateAudio;
