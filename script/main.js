// Get UI Elements
const container = document.querySelector('.container'),
  ranges = document.querySelector('.dynamic'),
  process = document.querySelector('.process'),
  min = document.getElementById('min'),
  max = document.getElementById('max'),
  start = document.getElementById('start'),
  end = document.getElementById('end'),
  guess = document.getElementById('guess'),
  btn = document.querySelector('button'),
  result = document.getElementById('result');

let trueNumber = 2,
  guessLeft = 3;

// Check for Option
container.addEventListener('change', (e) => {
  if (e.target.name === 'option') {
    if (e.target.value !== 'fixed') {
      ranges.style.display = 'flex';
      process.style.display = 'none';
      // to prevent change the mode
      dynamic.disabled = true;
      fixed.disabled = true;
    } else {
      ranges.style.display = 'none';
      process.style.display = 'block';
      // to prevent change the mode
      dynamic.disabled = true;
      fixed.disabled = true;
    }
  }
});

// Event On Input Field
btn.addEventListener('click', checkNumber);

// Function Check For Correct Number
function checkNumber(e) {
  let number = +guess.value;
  // You Win
  if (number === trueNumber) {
    showMessage(`${number} is correct, YOU WIN!`, 'green');
  }
}

// Function Create Random Number
function createRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// Function Show Message
function showMessage(msg, color) {
  guess.style.borderColor = color;
  result.style.display = 'block';
  result.textContent = msg;
  result.style.backgroundColor = color === 'green' ? '#10d389' : '#f8d7da';
  result.style.color = color;
}
