/*
 * Цикл for (только для цифр!!!)
 */

// і - итератор
// for (let i = 2; i <= 10; i += 2) {
//   console.log(i);
// }

// console.log('qweqwe');

/*
 * Pre-increment и Post-increment
// ЭТО ЗЛО
 */

// for (let i = 0; i < 10; i++) {
//   console.log(i);
// }

// let a = 10;
// const b = a++;

// console.log(a);
// console.log(b);

// let a = 10;
// const b = ++a;

// console.log(a);
// console.log(b);

/*
 * Напиши скрипт который подсчитывает общую сумму зарплат работников.
 * Кол-во работников хранится в перемнной employees.
 * Зарплата каждого работника это случайное число от 500 до 5000
 * Записать сумму в переменную totalSalary и вывести в консоль
 */

// //  1 сделать вары
// const minSalary = 500;
// const maxSalary = 5000;
// const employees = 4;
// let totalSalary = 0;

// // // 2 перебрать работников в цикле
// for (let i = 1; i <= employees; i += 1) {
   
//     // 3 сгенерить случайную зп
//     const salary = Math.round(
//         Math.random() * (maxSalary - minSalary) + minSalary,
//     );

//     console.log(`ЗП работника номер ${i} - ${salary}`);

//   // 4  прибавить к тоталу
//   totalSalary += salary;


// // 5 лог
// console.log('totalSalary: ', totalSalary);
// }


/*
 * Напиши скрипт который подсчитывает сумму всех чётных чисел,
 * которые входят диапазон чисел в переменных от min до max.
 * Например, если min=0 и max=5, то диапазон 0-5, 
 * и в нём два чётных числа - 2 и 4, их сумма 6.
 */

// четное число - когда остаток от деления 0
// 5 % 2 = 1 нечетное
// 4 % 2 = 0 четное
// 

//  1 вары
const min = 0;
const max = 5;
let total = 0;


// фор от min до max с шагом в 1
for (let i = min; i <= max; i += 1) {
    // console.log(i);

    // проверяем остаток от деления    
    if (i % 2 === 0) {
        console.log("чётное: ", i);

        // пишем в сумму четных чисел   
         // !если не вывести эту сумму, будет считать только четные

        total += i; 
    }
    
  

//   // аналог +=
//   // total = total + i;
}
console.log("Total четных чисел: ", total);

// !!усли if не выполняется - пропусти: 
// continue;


// ЗАДАЧА С ВТОРОГО ДЗ!!!
// Напиши функцию calculateTotal(number), которая принимает целое число (параметр number) и возвращает сумму всех целых чисел от единицы и до этого числа. Например, если number равно 3, то сумма это 1 + 2 + 3, то есть 6.

// function calculateTotal(number) {
//  // Change code below this line

// let sum = 0;

// for (let i = 0; i <= number; i += 1) {
//   sum += i;
// }

// return sum                                         
//   // Change code above this line
// }