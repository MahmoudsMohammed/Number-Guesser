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

