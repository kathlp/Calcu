const display = document.getElementById("display");
const eyes = [document.getElementById("eyeLeft"), document.getElementById("eyeRight")];
const mouth = document.getElementById("mouth");

function append(value) {
  display.value += value;
  blinkEyes();
  glow();
}

function clearDisplay() {
  display.value = "";
  blinkEyes();
}

function deleteLast() {
  display.value = display.value.slice(0, -1);
  blinkEyes();
}

function calculate() {
  try {
    display.value = eval(display.value);
    smile();
  } catch {
    display.value = "Error";
    sadFace();
  }
  glow();
}

function glow() {
  if (event && event.target) {
    event.target.classList.remove("glow");
    void event.target.offsetWidth; // restart animation
    event.target.classList.add("glow");
  }
}

function blinkEyes() {
  eyes.forEach(eye => {
    eye.style.transform = "scaleY(0.2)";
    setTimeout(() => eye.style.transform = "scaleY(1)", 200);
  });
}

function smile() {
  mouth.style.borderBottom = "5px solid #ff69b4";
  mouth.style.borderTop = "none";
  mouth.style.borderRadius = "0 0 40px 40px";
}

function sadFace() {
  mouth.style.borderBottom = "none";
  mouth.style.borderTop = "5px solid #ff69b4";
  mouth.style.borderRadius = "40px 40px 0 0";
}
