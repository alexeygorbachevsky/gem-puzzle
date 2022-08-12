function getVolumeListeners() {
  const { elements, values } = this._state;

  return [
    {
      event: "click",
      cb: () => {
        if (elements.volume.className === "volume") {
          elements.audioMenuItemSelect.play();
          elements.audioMainTheme.volume = 0;
          values.isVolumeOn = false;
          elements.volume.classList.remove("volume");
          elements.volume.classList.add("volume_Off");
          elements.volume.innerHTML = '<i class="fas fa-volume-mute"></i>';
        } else {
          elements.audioMainTheme.volume = 1;
          values.isVolumeOn = true;
          elements.volume.classList.remove("volume_Off");
          elements.volume.classList.add("volume");
          elements.volume.innerHTML = '<i class="fas fa-volume-up"></i>';
        }
      },
    },
  ];
}

export default getVolumeListeners;
