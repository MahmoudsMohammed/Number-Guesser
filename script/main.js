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


