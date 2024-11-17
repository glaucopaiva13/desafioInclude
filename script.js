
function toggle() {
  const html = document.documentElement;
  const audio = new Audio("./tv.wav");
  html.classList.toggle('on')
  audio.play()
}