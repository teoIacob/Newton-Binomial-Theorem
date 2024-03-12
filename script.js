const div = document.getElementById('result');
const btn = document.getElementById('btn');
const num = new Array(3);

function factorial(x) {
  if (x > 0)
    return x * factorial(x - 1);
  else
    return 1;
}

function combinare(n, k) {
  return factorial(n) / (factorial(k) * factorial(n - k));
}

function putere(a, b) {
  if (typeof a === 'string')
    return `${a}^${b}`;
  if (typeof a === 'number') {
    if (b > 0)
      return a * putere(a, b - 1);
    else
      return 1;
  }
}

btn.addEventListener('click', function () {
  num[0] = document.getElementById('inputA').value;
  num[1] = document.getElementById('inputB').value;
  num[2] = document.getElementById('inputN').value;

  let expression = '';
  for (let i = 0; i <= num[2]; i++) {
    expression += `+${combinare(num[2], i)}*${putere(num[0], num[2] - i)}*${putere(num[1], i)}`;
  }

  div.innerText = math.simplify(expression).toString();
});
