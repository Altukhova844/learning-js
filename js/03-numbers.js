// парс числа с Нфмбер.парсИнт() и Намбер.парсФлот()
// парсить - чтобы отрезать например
// let elementWidth = '50.25px';
// const result = Number.parseInt(elementWidth);

// console.log(result);

// let elementHeight = '200.75px';
// elementHeight = Number.parseFloat(elementHeight);
// console.log('Element Height:', elementHeight);

// Метод toFixed
let salary = 1300.54876534567;
salary = Number(salary.toFixed(3));
// salary = Number(salary);

console.log(salary);

// 
let quantity = '30';
let value = '12 Эту строку невозможно привести к числу'

console.log(Number(',cn'));
console.log(Number(quantity));
console.log(Number(value));

// Math
// const base = 2;
// const power = 8;
// const mathNumResult = Math.pow(2, 3);
// const mathResult = Math.pow(base, power);

// console.log(mathNumResult);
// console.log(mathResult);

// напиши скрипт который просит пользователя
// ввести число в эту степень 
// и выводит результат в консоль
// 
// 1. попросиитьь ввести число и сохранить в переменной
// let base = prompt('напиши число');
// base = Number(base);
// console.log(base);

// // 2. попросить ввести степень и сохранить в переменной
// let power = prompt('напиши степень')
// power = Number(power);
// console.log(power);

// // 3. возвести введенные данные в степень и вывести в консоль
// const result = base ** power;
// console.log(result);

// Math.random()* (max-min)+min
const max = 50;
const min = 30;
const result = Math.round(Math.random() * (max - min) + min);

console.log(result);

// alert выводит сообщение.

// prompt выводит сообщение и ждёт, 
// пока пользователь введёт текст, 
// а затем возвращает введённое значение или null,
// если ввод отменён(CANCEL / Esc).

// confirm выводит сообщение и ждёт, 
// пока пользователь нажмёт «OK» или «CANCEL» 
// и возвращает true / false.


