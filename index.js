const container = document.querySelector('.container')
const text = document.querySelector("#text")
const body= document.querySelector('.time')
const gradientchange= document.querySelector('.gradient-circle')

const totalTime = 7500;
const breatheTime = (totalTime / 5) * 2;
const holdTime = totalTime / 5;

breathAnimation();

function breathAnimation() {
  text.innerText = 'Breathe In!';
  container.className = 'container grow';

  setTimeout(() => {
    text.innerText = 'Hold';

    setTimeout(() => {
      text.innerText = 'Breathe Out!';
      container.className = 'container shrink';
    }, holdTime);
  }, breatheTime);
}

setInterval(breathAnimation, totalTime);

setTimeout(() => {
    body.classList.add('time2')
    gradientchange.classList.add('gradient2')
    console.log('background changed!');
},10000)

