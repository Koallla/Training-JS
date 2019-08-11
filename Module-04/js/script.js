'use strict';

// const higherOrderFunction = function(callback) {
//   const string = 'HOCs are awesome';
//   callback(string);
// };

// const printMessage = function(message) {
//   console.log(message);
// };

// higherOrderFunction(printMessage);

// function repeat(n, action) {
//   for (let i = 0; i < n; i += 1) {
//     action(i);
//   }
// }

// Передаем console.log как callback-функцию
// repeat(3, console.log);

// const labels = [];

// repeat(5, function(i) {
//   labels.push(`Label ${i + 1}`);
// });

// console.log(labels);

// const repeatLog = n => {
//   for (let i = 0; i < n; i++) {
//     console.log(i);
//   }
// };

// repeatLog(10);

// const filter = function(array, test) {
//   const filtered = [];

//   for (const element of array) {
//     const passed = test(element);

//     if (passed) {
//       filtered.push(element);
//     }
//   }

//   return filtered;
// };

// const fruits = [
//   { name: 'apples', quantity: 200, isFresh: true },
//   { name: 'grapes', quantity: 150, isFresh: false },
//   { name: 'bananas', quantity: 100, isFresh: true },
// ];

// const freshFruits = filter(fruits, fruit => fruit.isFresh);
// console.log(freshFruits); // массив с объектами apples и bananas

// const fruitsWithQuantity = filter(fruits, fruit => fruit.quantity >= 120);
// console.log(fruitsWithAmount); // массив с объектами apples и grapes
//=====================================================================================
// const numberGenerator = () => {
//   // Local “free” variable that ends up within the closure
//   var num = 1;
//   function checkNumber() {
//     console.log(num);
//   }
//   num++;
//   return checkNumber;
// };

// var number = numberGenerator();
// number(); // 2

// function showThis() {
//   console.log('this in showThis: ', this);
// }

// // Вызываем в глобальном контексте
// showThis();
// // this in showThis: Window

// const user = { name: 'Mango' };

// /*
//  * Записываем ссылку на функцию в свойство объекта
//  * Обратите внимание, что это не вызов - нет ()
//  */
// user.showContext = showThis;

// /*
//  * Вызываем функцию в контексте объекта
//  * this будет указывать на текущий объект, в контексте
//  * которого осуществляется вызов, а не на глобальный объект.
//  */

// user.showContext();
// // this in showThis: {name: "Mango", showContext: ƒ}

// //====================================================================================

// const hotel = {
//   name: 'Resort Hotel',
//   showThis() {
//     console.log(this);
//   },
// };

// const fn = function(callback) {
//   /*
//    * Во время вызова fn, callback будет ссылкой
//    * на функцию showThis объекта hotel.
//    * Ее вызов происходит в глобальном контексте,
//    * про hotel она ничего не знает.
//    * Соответственно this не будет ссылаться на hotel
//    */
//   callback();
// };

// hotel.showThis();
// // Передается ссылка на функцию а нее ее вызов
// fn(hotel.showThis); // window или undefined

// let user = {
//   name: 'Джон',
//   age: 30,
// };

// user.sayHi = function() {
//   alert('Привет!');
// };

// user.sayHi(); // Привет!
// console.log(user);

//Задание 1 =========================================================================================
// const account = {
//   owner: 'Mango',
//   balance: 24000,
//   discount: 0.1,
//   orders: ['order-1', 'order-2', 'order-3'],
//   changeDiscount(value) {
//     this.discount = value;
//   },
//   getOrders() {
//     return this.orders;
//   },
//   addOrder(cost, order) {
//     this.balance -= cost;
//     this.orders.push(order);
//   },
// };

// account.changeDiscount(0.15);
// console.log(account.discount); // 0.15

// const orders = account.getOrders();
// console.log(orders); // ['order-1', 'order-2', 'order-3']

// account.addOrder(5000, 'order-4');
// console.log(account.balance); // 19000
// console.log(account.orders); // ['order-1', 'order-2', 'order-3', 'order-4']

// //Задание 2 =====================================
const inventory = {
  items: ['Монорельса', 'Фильтр'],

  add(itemName) {
    this.items.push(itemName);
  },

  remove(itemName) {
    this.items = this.items.filter(item => item !== itemName);
  },
};

const invokeInventoryOperation = function(itemName, inventoryAction) {
  console.log(`Invoking ${inventoryAction.name} opeartion on ${itemName}`);
  const action = inventoryAction.bind(inventory);
  action(itemName);
};

invokeInventoryOperation('Аптечка', inventory.add);
// Invoking add opeartion on Аптечка

console.log(inventory.items); // ['Монорельса', 'Фильтр', 'Аптечка']

invokeInventoryOperation('Фильтр', inventory.remove);
// // Invoking remove opeartion on Фильтр

console.log(inventory.items); // ['Монорельса', 'Аптечка']

//Стрелка ==================================================================
// const hotel = {
//   name: 'Resort hotel',
//   showThis() {
//     const fn = () => {

//       console.log('this in fn: ', this);
//     };

//     fn();
//     console.log('this in showThis: ', this);
//   },
// };

// hotel.showThis();
