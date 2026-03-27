document.addEventListener("DOMContentLoaded", function(){

let current = 0;
const app = document.getElementById('app');
const dots = document.querySelectorAll('.dot');

function updateSlide(){
  app.style.transform = translateX(-${current * 100}%);

  dots.forEach(dot => dot.classList.remove('active'));
  dots[current].classList.add('active');
}

// tombol
window.nextSlide = function(){
  if(current < 2){
    current++;
    updateSlide();
  }
}

window.prevSlide = function(){
  if(current > 0){
    current--;
    updateSlide();
  }
}

// swipe HP
let startX = 0;

app.addEventListener('touchstart', e => {
  startX = e.touches[0].clientX;
});

app.addEventListener('touchend', e => {
  let endX = e.changedTouches[0].clientX;

  if(startX - endX > 50 && current < 2) current++;
  if(endX - startX > 50 && current > 0) current--;

  updateSlide();
});

// career
window.generateRoadmap = function(){
  let val = document.getElementById('interest').value;
  document.getElementById('output').innerHTML = "Cocok jadi: " + val;
}

// AI (sementara aman untuk GitHub)
window.askAI = function(){
  let q = document.getElementById('question').value;
  let res = document.getElementById('aiResponse');

  res.innerHTML = "AI sedang membantu: " + q;
}

});