particlesJS("particles-js", {
  "particles": {
    "number": { "value": 70 },
    "color": { "value": "#00ffc3" },
    "shape": { "type": "circle" },
    "opacity": { "value": 0.5 },
    "size": { "value": 3 },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#00ffc3",
      "opacity": 0.4,
      "width": 1
    },
    "move": { "enable": true, "speed": 3 }
  },
  "interactivity": {
    "events": {
      "onhover": { "enable": true, "mode": "repulse" },
      "onclick": { "enable": true, "mode": "push" }
    },
    "modes": {
      "repulse": { "distance": 100 },
      "push": { "particles_nb": 4 }
    }
  },
  "retina_detect": true
});
const phrases = ["Youssef Gebsi", "Future Game Developer"];
let part = 0;
let partIndex = 0;
let isDeleting = false;
const element = document.getElementById("typewriter");

function typeLoop() {
  const text = phrases[part];
  if (isDeleting) {
    element.textContent = text.substring(0, partIndex--);
    if (partIndex < 0) {
      isDeleting = false;
      part = (part + 1) % phrases.length;
    }
  } else {
    element.textContent = text.substring(0, partIndex++);
    if (partIndex > text.length + 5) {
      isDeleting = true;
    }
  }
  setTimeout(typeLoop, isDeleting ? 50 : 120);
}

typeLoop();

