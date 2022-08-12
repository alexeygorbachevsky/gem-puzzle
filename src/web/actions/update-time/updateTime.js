function updateTime() {
  const { elements, values } = this._state;

  values.timerId = setInterval(() => {
    values.seconds += 1;

    if (values.seconds === 60) {
      values.minutes += 1;
      values.seconds = 0;
    }

    let min = values.minutes;
    let sec = values.seconds;

    if (values.minutes <= 9) {
      min = `0${values.minutes}`;
    }

    if (values.seconds <= 9) {
      sec = `0${values.seconds}`;
    }

    values.time = `${min}:${sec}`;
    elements.time.textContent = `Time:${values.time}`;
  }, 1000);
}

export default updateTime;
