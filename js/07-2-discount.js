// Напиши скрипт подсчета суммы покупки со скидкой 
// в зависимости от потраченной суммы за все вермя(партнерская программа)

//     - Общая сумма потраченного хранится в переменной totalSpent
//     - Сумма текущего платежа - переменная payment
//     - Скидка - переменная  discount

//     1. Если потрачено от 100 до 1000 - бронзовый партнер, скидка 2 %
//     2. Если от 1000 до 5000 - серебряный партнер, скидка 5 %
//     3. Если больше 5000 - золотой партнер, скидка 10 %
//     4. Если меньше 100 - не партнер, скидка 0 %
        
//     5. В результате вывести сообщение 
// "Оформляем заказ на сумму [сумма] со скидкой [скидка]%"
        
// решено самостоятельно и не до конца
// не высчитаны скидки, олько сообщения 
// !СМОТРЕТЬ У РЕПЕТЫ - там высчитано
const totalSpent = 0;
let payment = 500;
let discount = 0;

if (totalSpent > 100 && totalSpent < 1000) {
    console.log(`Оформляем заказ на сумму ${payment} со скидкой 2%`);
} else if (totalSpent > 1000 && totalSpent < 5000) {
    console.log(`Оформляем заказ на сумму ${payment} со скидкой 5%`);
} else if (totalSpent > 5000) {
    console.log(`Оформляем заказ на сумму ${payment} со скидкой 10%`);
} else {
    console.log(`Оформляем заказ на сумму ${payment} без скидки`)
}


