'use strict';
/*
 * Для объявления переменной используются ключевые слова let и const,
 * за которыми следует имя переменной
 */
// let firstNumber;

/*
 * Переменные объявленые как const обязательно должны быть инициализированы
 * значением во время объявления, иначе будет ошибка
 */
// const secondNumber = 15;

/*
 * Значение переменной можно получить обратившись к ней по имени.
 * console.log() используется для вывода данных в консоль разработчика,
 * с этим методом более детально познакомимся позже.
 */
// console.log('secondNumber: ', secondNumber); // 15

/*
 * Eсли мы изначально не присваиваем переменной, объявленой как let,
 * никакого значения, в нее помещается специальное значение undefined (не определено)
 */
// console.log('firstNumber до присваивания значения: ', firstNumber); // undefined

/*
 * После объявления, если переменная объявлена как let,
 * можно записать значение
 */
// firstNumber = 5;

/*
 * Помним о том что нельзя перезаписать значение
 * переменной объявленой используя const
 *
 * secondNumber = 10; // будет ошибка
 */

// После присвоения значения
// console.log('firstNumber: ', firstNumber); // 5


// // Узнать тип значения переменной
// let a = null;
// console.log(typeof a);  

// // // String
// const message = 'JavaScript is awesome!';
// console.log(typeof message); // "string"

// // // Boolean
// const isActive = false;
// console.log(typeof isActive); // "boolean"



// const myname = 'Mika is good boy';

// alert(myname);



// Методы confirm prompt
// const isComing = confirm('Please confirm hotel reservation');
// console.log(typeof isComing); 
// console.log(isComing);


// const hotelName = prompt('Please enter desired hotel name:');
// console.log(hotelName);

// const value = prompt('Please enter a number!');
// console.log(typeof value); 
// console.log(value);




// const x = 2
// const y = 3
// const z = 5

// console.log(2 + 3 * 100 * (2+3));


// Сложение с заменой (есть и для других операторов)----------------------------------------------
// let value = 5;
// // Аналогично записи value = value + 10;
// value += 10;
// console.log(value); // 15


// Сравнения--------------------------------------------------------
// const x = 5;
// const y = 10;
// const z = 5;

// console.log(x > y); // false
// console.log('x < y:', x < y); // true
// console.log('x < z:', x < z); // false
// console.log('x <= z:', x <= z); // true
// console.log('x === y:', x === y); // false
// console.log('x === z:', x === z); // true
// console.log('x !== y:', x !== y); // true
// console.log('x !== z:', x !== z); // false


// Проверка на номер is Not a Number?--------------------------------------------------------
// const validNumber = Number('51'); // 51
// console.log(Number.isNaN(validNumber)); // false

// const invalidNumber = Number('qweqwe'); // NaN
// console.log(Number.isNaN(invalidNumber)); // true


// Объект для работы с числами--------------------------------------------------------
//  Math.floor(num) - возвращает наибольшее целое число, меньшее, либо равное указанному
// console.log(Math.floor(1.7)); // 1

// // Math.ceil(num) - возвращает наименьшее целое число,
// // большее, либо равное указанному числу.
// console.log(Math.ceil(1.2)); // 2

// // Math.round(num) - возвращает значение числа, округлённое до ближайшего целого
// console.log(Math.round(1.2)); // 1
// console.log(Math.round(1.5)); // 2

// // Math.max(num1, num2, ...) - возвращает наибольшее число из набора
// console.log(Math.max(20, 10, 50, 40)); // 50

// // Math.min(num1, num2, ...) - возвращает наименьшее число из набора
// console.log(Math.min(20, 10, 50, 40)); // 10

// // Math.pow(base, exponent) - возведение в степень
// console.log(Math.pow(2, 4)); // 16

// // Math.random() - возвращает псевдослучайное число в диапазоне [0, 1)
// console.log(Math.random()); // случайное число между 0 и 1
// console.log(Math.random() * (10 - 1) + 1); // случайное число от 1 до 10




// Конкатенация строк--------------------------------------------------------
// const state = 'Mango ' + 'is' + ' happy';
// console.log(state); // Mango is happy

// // Теперь посмотрим на порядок операндов
// let result;

// result = 5 + '5';
// console.log(result); // '55'
// console.log(typeof result); // string

// result = 5 + '5' + 5;
// console.log(result); // '555'
// console.log(typeof result); // string

// /*
//  * Обратите внимание, произошла математическая операция
//  * сложения для первых двух пятерок, после чего 10 было
//  * преобразовано в строку '10' и сшито с '5'
//  */
// result = 5 + 5 + '5';
// console.log(result); // '105'
// console.log(typeof result); // string


// Работа со строками--------------------------------------------------------
// const message = 'Welcome to Bahamas!';

// console.log(message.length); // 19
// console.log('There is nothing impossible to him who will try'.length); // 47

// console.log(message.toLowerCase()); // welcome to bahamas!
// console.log(message.toUpperCase()); // WELCOME TO BAHAMAS!

// // При этом исходная строка не изменяется
// console.log(message); // Welcome to Bahamas!

// // Все методы строк чувствительны к регистру
// console.log(message.indexOf('to')); // 8
// console.log(message.indexOf('hello')); // -1

// console.log(message.includes('welcome')); // false
// console.log(message.includes('Welcome')); // true

// Шаблонные строки и интерполяции
// Используя переменные необходимо составить строку с подставленными значениями
// const name = 'Mango';
// const age = 2;
// const mood = 'happy';

// // const message = 'My name is ' + name + ", I'm " + age + ' years old and ' + mood + '.';

// // console.log(message); // My name is Mango, I'm 2 years old and happy.

// /*
//  * Составлять строки используя конкатенацию очень неудобно.
//  * Представьте ситуацию когда у вас 10 переменных, значения
//  * которых необходимо подставить в строку. 😐
//  */

// // На помощь приходят шаблонные строки и интерполяция
// const sameMessage = `My name is ${name}, I'm ${age} years old and ${mood}.`;

// // Значительно чище и удобнее
// console.log(sameMessage); // My name is Mango, I'm 2 years old and happy.

// // В интерполяции можно использовать любое валидное выражение
// console.log(`Результат сложения равен ${2 + 2}.`); // Результат сложения равен 4.



// else if
// let cost;
// const subscription = 'premium';

// if (subscription === 'free') {
//   cost = 0;
// } else if (subscription === 'pro') {
//   cost = 100;
// } else if (subscription === 'premium') {
//   cost = 500;
// } else {
//   console.log('Invalid subscription type');
// }

// console.log(cost); // 500


// let type;
// const age = 20;

// if (age >= 18) {
//   type = 'adult';
// } else {
//   type = 'child';
// }

// console.log(type);



// SWITCH--------------------------------------------------------
// let cost;
// const subscription = 'premium';

// switch (subscription) {
//   case 'free':
//     cost = 0;
//     break;

//   case 'pro':
//     cost = 100;
//     break;

//   case 'premium':
//     cost = 600;
//     break;

//   default:
//     console.log('Invalid subscription type');
// }

// console.log(cost);



// Цикл--------------------------------------------------------

// let counter = 0;

// while (counter < 100) {
//     console.log('counter: ', counter);
//     counter += 1;
// }

// let clientCounter = 18;
// const maxClients = 25;

// while (clientCounter < maxClients) {
//   console.log(clientCounter);
//   clientCounter += 1;
// }


// let password = '';

// do {
//   password = prompt('Введите пароль длиннее 4-х символов', '');
// } while (password.length < 5);

// console.log('Ввели пароль: ', password);



// Цикл for--------------------------------------------------------

// const max = 10;

// for (let i = 0; i < max; i += 1) {
//   console.log(i);
// }


//Сумма--------------------------------------------------------
// const target = 3;
// let sum = 0;

// for (let i = 0; i <= target; i += 1) {
//   sum += i;
// }

// console.log(sum);

// Остаток от деления--------------------------------------------------------
// const max = 10;

// for (let i = 0; i < max; i += 1) {
//   console.log(`${max} % ${i} = `, max % i);
// }


//break--------------------------------------------------------
// for (let i = 0; i < 10; i += 1) {
//     if (i === 5) {
//       console.log('Дошли до 5-й итерации, прерываем цикл!');
//       break;
//     }
//   }


// continue--------------------------------------------------------
  /*
 * Используем цикл для вывода только нечетных чисел.
 * Для чётных i срабатывает continue, выполнение тела прекращается
 * и управление передаётся на следующую итерацию.
 */
// const number = 10;

// for (let i = 0; i < number; i += 1) {
//   if (i % 2 === 0) {
//     continue;
//   }

//   console.log('Нечетное i: ', i); // 1, 3, 5, 7, 9
// }


// Бесконечные циклы
// let userChoice;

// while (true) {
//   userChoice = prompt(
//     'Выберите вариант доставки: 1 - самовывоз, 2 - курьер, 3 - почта',
//   );

//   if (userChoice === null) {
//     break;
//   }

//   userChoice = Number(userChoice);

//   const isValid = userChoice >= 1 && userChoice <= 3;

//   if (isValid) {
//     break;
//   }

//   console.log('Невалидный ввод, попробуйте еще раз!');
// }

// switch (userChoice) {
//   case 1:
//     alert('Самовывоз!');
//     break;

//   case 2:
//     alert('Курьер!');
//     break;

//   case 3:
//     alert('Почта!');
//     break;

//   default:
//     alert('Вам перезвонит менеджер!');
// }



// Ввод только положительных чисел
// let userInput;
// let total = 0;

// while (true) {
//   userInput = prompt('Введите число больше нуля');

//   if (userInput === null) {
//     break;
//   }

//   userInput = Number(userInput);

//   if (userInput <= 0) {
//     break;
//   }

//   total += userInput;
// }

// console.log(total);

const boxWightInPx = '25,5px';

const wigth = Number.parseFloat(boxWightInPx);

console.log(   wigth);





