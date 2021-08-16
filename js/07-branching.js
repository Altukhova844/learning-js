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
