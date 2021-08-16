// Оператор ветвления IF

// Оператор ветвления IF ... ELSE
// то есть 
// если TRUE  - выполняется {BODY}
// если FALSE - {BODY} игнорируется, выполняется дальше /  пока не будет правильный ELSE

// Оператор ветвления ELSE ... IF

const salary = 3500;

if (salary < 500) {
    console.log('Level 1');
} else if(salary>500 && salary<1500){
    console.log('Level 2');
} else if (salary > 1500 && salary < 2500) {
    console.log('Level 3');
} else {
    console.log('High level');
}

console.log('Выше твой уровень зп');

// Тернарный оператор
// используется ТОЛЬКО когда 2 варианта развития событий

const balance = 1000;
// let message;

// if (balance > 0) {
//     message = 'Позитивынй баланс';
// } else {
//     message = 'Негативынй баланс. Пополните, пожалуйста счет'
// }

// СОКРАЩЕННАЯ ЗАПИСЬ ТЕРНАРКИ:
const message = balance > 0 ? 'Позитивынй баланс' : 'Негативынй баланс. Пополните, пожалуйста счет';

console.log(message);


// Блочная область видимости переменных
// то , что внутри - не видно снаружи
// а то, что снаружи -видно внутри

const b = 10;

if (true) {
    console.log(b);

    const a = 5;
    console.log(a);
}

console.log(b);

// ИЗ ЗАДАЧИ 2го МОДУЛЯ 2/32
function checkPassword(password) {
  const ADMIN_PASSWORD = "jqueryismyjam";
  // Change code below this line



  if (password === "jqueryismyjam") return ("Welcome!");

   return ("Access denied, wrong password!");

  // Change code above this line
}

// ИЗ ЗАДАЧИ 2го МОДУЛЯ 3/32

// Функция checkStorage проверяет возможность
// оформления заказа и возвращает сообщение о результате.
// Она принимает два параметра,
// значения которых будут задаваться во время её вызова.

// available - доступное количество товаров на складе
// ordered - количество единиц товара в заказе
// Проведи рефакторинг кода функции checkStorage
// используя паттерн «ранний возврат».

function checkStorage(available, ordered) {
  // Change code below this line

if (ordered === 0) { 
  return "Your order is empty!";
} if (ordered > available) {
  return "Your order is too large, not enough goods in stock!";
} return "The order is accepted, our manager will contact you";
  

  // Change code above this line
}
