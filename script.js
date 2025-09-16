function startCountdown(duration, display) {
  let timer = duration, minutes, seconds;
  setInterval(function () {
    minutes = parseInt(timer / 60, 10);
    seconds = parseInt(timer % 60, 10);

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    display.textContent = "00:" + minutes + ":" + seconds;

    if (--timer < 0) {
      timer = duration;
    }
  }, 1000);
}

window.onload = function () {
  let fifteenMinutes = 60 * 15,
      display = document.querySelector('#timer');
  startCountdown(fifteenMinutes, display);

  // falling chips
  const falling = document.getElementById('falling');
  const chipCount = 25;

  for (let i = 0; i < chipCount; i++) {
    let chip = document.createElement("img");
    chip.src = "assets/chip.png";
    chip.className = "chip";
    chip.style.left = Math.random() * 100 + "vw";
    chip.style.animationDuration = 3 + Math.random() * 5 + "s";
    chip.style.animationDelay = Math.random() * 5 + "s";
    falling.appendChild(chip);
  }
};