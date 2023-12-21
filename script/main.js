// Get UI Elements
const container = document.querySelector('.container'),
  ranges = document.querySelector('.dynamic'),
  process = document.querySelector('.process'),
  min = document.getElementById('min'),
  max = document.getElementById('max'),
  start = document.getElementById('start'),
  end = document.getElementById('end'),
  guess = document.getElementById('guess'),
  btn = document.getElementById('submit'),
  play = document.getElementById('play'),
  result = document.getElementById('result');

let trueNumber = createRandom(1, 10),
  guessLeft = 3,
  minValue,
  maxValue;

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

// Handle ranges
min.addEventListener('change', (e) => {
  minValue = +e.target.value;
  min.disabled = true;
  max.disabled = false;
});

max.addEventListener('change', (e) => {
  maxValue = +e.target.value;
  max.disabled = true;
  // Start Play
  play.style.display = 'block';
});

// Start Play
play.addEventListener('click', (e) => {
  // Set range in the text and make sure from min and max
  start.textContent = Math.min(minValue, maxValue);
  end.textContent = Math.max(minValue, maxValue);
  // Create Random based on range
  trueNumber = createRandom(
    Math.min(minValue, maxValue),
    Math.max(minValue, maxValue)
  );
  // Display Process to start Guess
  process.style.display = 'block';
});

// Event On Input Field
btn.addEventListener('click', checkNumber);

// Function Check For Correct Number
function checkNumber(e) {
  let number = +guess.value;
  --guessLeft;
  // You Win
  if (number === trueNumber) {
    showMessage(`${number} is correct, YOU WIN!`, 'green');
    // Add class to can target and reload to paly aganin
    btn.textContent = 'Play Again';
    btn.className = 'rePlay';
  } else if (guessLeft === 0) {
    // if number id guesses finish
    guess.disabled = true;
    showMessage(
      `Game Over, you lost. The correct number was ${trueNumber}`,
      'red'
    );
    // Add class to can target and reload to paly aganin
    btn.textContent = 'Play Again';
    btn.className = 'rePlay';
  } else {
    guess.value = '';
    showMessage(`${number} is not correct, ${guessLeft} guesses left`, 'red');
  }
}

// Play again
container.addEventListener('mousedown', (e) => {
  if (e.target.className === 'rePlay') {
    window.location.reload();
  }
});

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
