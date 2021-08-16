// напиши задачу, где
// гость x y 
// поселяется в z номер q
// поставь переменные
// выведи в консоль

const firstName = 'Alexandra';
const lastName = 'Altukhova';
const roomQuality = 'VIP';
const roomNumber = '616';
const fullName = firstName + ' ' + lastName;
const welcomeMsg= 'Welcome,'+ ' '+ fullName +'!' + ' ' +'Nice to meet you here:' + ' ' +roomQuality+ ' ' + roomNumber

console.log(welcomeMsg);
console.log(`Welcome, ${fullName}!
Nice to meet you here:
${roomQuality}
${roomNumber}!`)

// нормализация ввода 
// для опитимизации поиска
const brand = 'SamSUng';
const normilizedBrand = brand.toLowerCase();

console.log(normilizedBrand);

// поиск в строке
const blackListWord1 = 'спам';
const blackListWord2 = 'распродажа';
const string1 = 'Привет, это не спам! Купи слона :-)';
const string2 = 'РАСПРОДАЖА зимней обуви!!111';
const string3 = 'Рекламная компания БЛАБЛА';

console.log(string1.includes(blackListWord1));
console.log(string1.includes(blackListWord2));

console.log(string2.includes(blackListWord1));
const normilizedString2 = string2.toLowerCase();
console.log(normilizedString2.includes(blackListWord2));

console.log(string3.includes(blackListWord1));
console.log(string3.includes(blackListWord2));