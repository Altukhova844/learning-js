/*
 * Знакомство  с массивами
 * - Объявление
 * - Индексация
 * - Длина
 * - Индекс последнего элемента
 * - Переопределение
 *
 * 'Mango', 'Kiwi', 'Poly', 'Ajax'
 */

// const friends = ['Mango', 'Kiwi', 'Poly', 'Ajax'];
// console.table(friends);

// // НЕ ПЕРЕЗАПИСЬ ЭЛЕМЕНТА , 
// // А ИЗМЕНЕНИЕ ОДНОГО КУСОЧКА МАССИВА
// friends[1] = 'qwerqrwr';
// friends[3] = 123123;

// console.table(friends);

// const lastIndex = friends.length - 1;
// console.log(lastIndex);

/*
 * Передача по ссылке и по значению
 * - Примитивы и сложные типы
 * - Ссылочное равенство (referential equality)
 */

// СОЗДАЕМ ОБЩУЮ ССЫЛКУ (УКАЗАТЕЛЬ)
// ДЛЯ А И В, 
// ЭТО НЕ ОТДЕЛЬНЫЕ ОДИНАКОВЫЕ МАССИВЫ
// const a = [1, 2, 3];
// const b = a;

// console.log('a', a);
// console.log('b', b);

// a[0] = 500;

// console.log('a', a);
// console.log('b', b);

// console.log(a === b);

// // СЛОЖНЫЕ ТИПЫ СРАВНИВАЮТСЯ ПО АДРЕСАМ(место в памяти):
// // НЕ РАВНЫ, ПОТОМУ ЧТО
// // ЭТО РАЗНЫЕ ЯЧЕЙКИ В ПАМЯТИ,
// // ХОТЬ ЭЕЛЕМЕНТЫ И РАВНЫ
// console.log([1, 2, 3] === [1, 2, 3]);

/*
 * Перебор (итерация) массива
 * - for - если нужен индекс или нужно изменить элемент массива
 * - for...of - если индекс не нужен и в массиве ничего менять не нужно
 */

const friends = ['Mango', 'Kiwi', 'Poly', 'Ajax'];
console.table(friends);
const lastIndex = friends.length - 1;

// for (let i = 0; i <= lastIndex; i += 1) {
//   friends[i] += `-${i}`;
//   console.log(friends[i]);
// }

// КОГДА НЕ НУЖНО ДОЮАВЛЯТЬ/ ИЗМЕНЯТЬ ЧТО-ТО В ПЕРЕМЕННЫХ,
// ТУТ В ПЕРЕМЕННОЙ FRIEND ЕСТЬ СВОЕ ЗНАЧЕНИЕ 
// ВЫШЕ НЕ ПЕРЕМЕННЫЕ , А ИНДЕКСЫ
for (let friend of friends) {
  console.log(friend);
}

// console.table(friends);