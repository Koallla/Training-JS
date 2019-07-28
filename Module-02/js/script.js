'use strict';

// const clients = ['Mango', 'Ajax', 'Poly'];

// for (const client of clients) {
//   console.log(client);
// }

// const string = 'javascript';

// for (const character of string) {
//   console.log(character);
// }

// const clients = ['Mango', 'Poly', 'Ajax'];
// const clientNameToFind = 'Poly';
// let message;

// for (const client of clients) {
//   if (client === clientNameToFind) {
//     message = 'Клиент с таким именем есть в базе данных!';
//     break;
//   }

//   message = 'Клиента с таким именем нету в базе данных!';
// }

// console.log(message);

// const numbers = [1, 3, 14, 18, 4, 7, 29, 6, 34];
// const threshold = 15;

// for (let i = 0; i < numbers.length; i += 1) {
//   if (numbers[i] < threshold) {
//     continue;
//   }

//   console.log(`Число больше чем ${threshold}: ${numbers[i]}`);
// }

// const clients = ['Bob', 'John', 'Jack'];

// console.log(clients[0]);

// clients[2] = 'Karl';

// console.log(clients);

// const message = 'Welcome to Bahamas Panamas!';

// console.log(message.split(' '));

// console.log(message[1]);
// console.log(message.split(''));

// const clients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];

// console.log(clients.indexOf('Poly')); // 2
// console.log(clients.indexOf('Monkong')); // -1

// Выносим варианты в массив
// const redFruits = ['apple', 'strawberry', 'cherry', 'cranberries'];
// const fruit = 'cherry';

// if (redFruits.includes(fruit)) {
//   console.log('It is a red fruit!');
// }

// const clients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];

// // Вернет новый массив в котором будут элементы с индексами от 1 до 2
// console.log(clients.slice(-1)); // ["Ajax", "Poly"]

// const add = function(a, b, c) {
//   return a + b + c;
// };

// // 1, 2, 3 это аргументы
// // const result = add(1, 2, 3);

// console.log(add(10, 10, 18));
// // console.log(add(5, 10, 15)); // 30

// add(1, 2, 3); // 6
// print('text'); // text

// function add(a, b, c) {
//   return a + b + c;
// }

// function print(str) {
//   console.log(str);
// }

// ========================================================
// const value = 50;

// const add = function(num) {
//   const value = 10;
//   const innerValue = 15;

//   return num + value + innerValue;
// };

// // value объявлен глобально и поэтому доступен
// console.log(value); // 50

// console.log(add(200)); // 35

// // Ошибка, переменная innerValue не объявлена в этой области
// // видимости, она доступна только внутри фукции add
// console.log(innerValue);

// console.log(a); // undefined
// a = 5;

// if (true) {
//   console.log(a); // 5
//   var a = 10;
//   console.log(a); // 10
// }

// // a = 15;
// console.log(a); // 15

// =====================================================
// Перечислить весь массив
//WHILE
// let counter = 0;

// const products = ['apples', 'grape', 'bananas']

// while (counter < products.length) {
//   console.log(products[counter]);

//   counter +=1;
// }
//========================================================
// DO WHILE

// let userInput;

// do {
//   userInput = prompt('Введи число 10 или нажми отмена!');
//   console.log(userInput);
// } while (
//   // Выполнять код пока userInput не станет null или 10.
//   // Цикл будет прерван, если выражение в скобках будет falce.
//   userInput !== null &&
//   Number(userInput) !== 10
// );

//========================================================
//FOR
// Перебор цикла
// const products = ['apple', 'grape', 'banana'];

// for (let i = 0; i < products.length; i += 1) {
//   console.log('i:', i);
//   console.log(`products[${i}]:`, products[i]);
// }

//========================================================
//FOR OF

// const products = ['apple', 'grape', 'banana'];

// for (const product of products) {
//   console.log(product);
// }

/*
 * Напиши скрипт, который проверяет произвольную строку
 * в переменной message и находит в ней самое длинное слово,
 * записывая его в переменную longestWord.
 */

// 1. Сделать из строки массив
// 2. Перебрать массив в цикле
// Переменная для хранения самого длинного слова и делаем предположение что самое длинное слово это первое
// на каждой итерации сравнить текущее и новое
// если новое больше текущего то перезаписать
//===========================
// const message = 'May the force be with you';
// const words = message.split(' ');
// let longestWord = words[0];

// for (let i = 1; i < words.length; i += 1) {
//   console.log(i);
//   console.log(words[i]);

//   if (words[i].length > longestWord.length) {
//     longestWord = Words[i];
//   }
// }
//===========================
// console.log(longestWord);
// const message = 'May the force be with you';
// const words = message.split(' ');
// let longestWord = words[0];

// for (let i = 1; i < words.length; i += 1) {
//   const currentWord = words[i];
//   const currentWordLength = currentWord.length;
//   const longestWordLength = longestWord.length;

//   if (currentWordLength > longestWordLength) {
//     longestWord = currentWord;
//   }
// }

// console.log(longestWord);
//========================================================

// const numbers = [25, 17, 3, 59, 11];

// let smallNumber = 59;

// for (const number of numbers) {
//   if (Number(number) < Number(smallNumber)) {
//     smallNumber = number;
//   }
// }
// console.log(smallNumber);

//============================================================

