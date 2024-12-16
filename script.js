//лаб 1
function task2() {
  let x = 2,
    y = 3,
    z = 4;

  alert(Math.pow(x, Math.pow(y, z)) + 2 * x * z);
}
function fun(a) {
  main_form.t_res.value = a;
}
function fun1(a) {
  main_form.t_res2.value = a;
}
function task2() {
  // Задайте значення змінних
  let x = 2; // Задайте значення x
  let y = 3; // Задайте значення y
  let z = 4; // Задайте значення z

  // Обчислення формули
  let F = Math.pow(x, Math.pow(y, z)) + 2 * x * z;

  // Виведення результату у модальному вікні
  alert(`Результат обчислення F: ${F}`);
}

function task4() {
  let x = 3,
    y = 4;

  let F =
    2 * x - y !== 0 && 2 * x * y !== 0
      ? 2 * x - y
      : y !== 0 && x !== 3 * y
      ? Math.pow(x, 2) + (2 * y) / x
      : x / y - x * y;

  alert('Результат F: ' + F);
}

function task5() {
  let sum = 0;
  let x = 2,
    y = 3;

  for (let i = 1; i <= 5; i++) {
    let factorial = 1;
    for (let j = 1; j <= i; j++) {
      factorial *= j;
    }

    let curr = Math.pow(-1, i + 1) * ((3 * x * y - 5) / factorial);

    sum += curr;
  }

  alert(`Сума ряду: ${sum}`);
}
const products = ['Юхта', 'Юпітер', 'Мандаринка', 'Міксер'];
const quantities = [10, 500, 20, 15];
const prices = [1000, 10, 800, 300];

let currentIndex = -1;

function fun1() {
  const productName = document.getElementById('productName').value.trim();
  const productSelectValue = document.getElementById('productSelect').value;

  if (productSelectValue !== '') {
    currentIndex = productSelectValue;
  } else if (productName !== '') {
    currentIndex = products.indexOf(productName);
  }

  if (currentIndex !== -1 && currentIndex < products.length) {
    document.getElementById('quantity').textContent = quantities[currentIndex];
    document.getElementById('price').textContent =
      prices[currentIndex] + ' грн';
  } else {
    document.getElementById('quantity').textContent = 'Товар не знайдено';
    document.getElementById('price').textContent = '';
  }
}

function fun2() {
  if (currentIndex !== -1 && currentIndex < products.length) {
    const totalAmount = quantities[currentIndex] * prices[currentIndex];
    document.getElementById('totalAmount').textContent = totalAmount + ' грн';
  } else {
    document.getElementById('totalAmount').textContent =
      'Оберіть товар або введіть правильну назву.';
  }
}

// лаб 2
