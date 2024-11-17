
function toggle() {
  const html = document.documentElement;
  const audio = new Audio("./assets/tv.wav");
  html.classList.toggle('on')
  audio.play()
}