'use strict';

/*
 * Иммутабельность
 */
{
  // const storage = {
  //   _items: [{ label: 'item-1' }, { label: 'item-2' }],
  //   get items() {
  //     return this._items;
  //   },
  //   add(item) {
  //     // this._items.push(item);
  //     this._items = [...this._items, item];
  //   },
  // };
  // console.log(storage.items);
  // storage.add({ label: 'item-3' });
  // console.log(storage.items);
}

/*
 * Перебирающие методы на Array.prototype
 */
const numbers = [1, 2, 3, 4, 5];

const products = [
  { id: 'id-1', label: 'Apples', price: 100, quantity: 50 },
  { id: 'id-2', label: 'Bananas', price: 120, quantity: 70 },
  { id: 'id-3', label: 'Lemons', price: 70, quantity: 30 },
];

const users = [
  { id: 'id-1', name: 'Mango', isActive: true },
  { id: 'id-2', name: 'Poly', isActive: false },
  { id: 'id-3', name: 'Ajax', isActive: true },
  { id: 'id-4', name: 'Chelsey', isActive: false },
];

const log = array => console.table(array);

/*
 * map
 */

{
  // const doubled = numbers.map(number => {
  //   return number * 2;
  // });
  // log(numbers);
  // log(doubled);
  // =====================
  // const getLabels = products => {
  //   return products.map(product => {
  //     return product.label;
  //   });
  // };
  // const getLabels = products => products.map(product => product.label);
  // const labels = getLabels(products);
  // log(labels);
  // =====================
  // const updateAllProductsPrice = (products, value) => {
  //   return products.map(product => {
  //     return {
  //       ...product,
  //       price: product.price * value,
  //     };
  //   });
  // };
  // const updateAllProductsPrice = (products, value) =>
  //   products.map(product => ({
  //     ...product,
  //     price: product.price * value,
  //   }));
  // const updatedProducts = updateAllProductsPrice(products, 1.5);
  // log(updatedProducts);
  // =====================
  // const updateProductQuantity = (products, productId, amount) => {
  //   return products.map(product => {
  //     return product.id === productId
  //       ? { ...product, quantity: product.quantity + amount }
  //       : product;
  //   });
  // };
  // const updated = updateProductQuantity(products, 'id-3', 50);
  // log(products);
  // log(updated);
  // Кастомный map
  // const map = (array, callback) => {
  //   const resultArray = [];
  //   for (let i = 0; i < array.length; i += 1) {
  //     const element = array[i];
  //     const res = callback(element);
  //     resultArray.push(res);
  //   }
  //   return resultArray;
  // };
  // const doubled = map(numbers, number => {
  //   return number * 5;
  // });
  // log(doubled);
  // const labels = map(products, product => {
  //   return product.label;
  // });
  // log(labels);
}

/*
 * filter
 */
{
  // const filtered = numbers.filter(number => {
  //   return number < 3;
  // });
  // log(filtered);
  // =====================
  // const getProductWithPrice = (products, price) => {
  //   return products.filter(product => {
  //     return product.price < price;
  //   });
  // };
  // const cheapProducts = getProductWithPrice(products, 120);
  // log(cheapProducts);
  // =====================
  // const getProductsWithQuantity = (products, quantity) => {
  //   return products.filter(product => {
  //     return product.quantity > quantity;
  //   });
  // };
  // const availableProducts = getProductsWithQuantity(products, 40);
  // log(availableProducts);
  // =====================
  // const getActiveUsers = users => {
  //   return users.filter(user => {
  //     return user.isActive;
  //   });
  // };
  // const activeUsers = getActiveUsers(users);
  // log(activeUsers);
  // const getInactiveUsers = users => {
  //   return users.filter(user => {
  //     return !user.isActive;
  //   });
  // };
  // const inactiveUsers = getInactiveUsers(users);
  // log(inactiveUsers);
}
/*
 * find
 */
{
  // const findUserById = (users, id) => {
  //   return users.find(user => {
  //     return user.id === id;
  //   });
  // };
  // const user = findUserById(users, 'id-2');
  // console.log(user);
}

/*
 * every и some
 */

{
  // const isAllUsersActive = users.every(user => {
  //   return user.isActive;
  // });
  // log(isAllUsersActive);
  // const isSomeUsersActive = users.some(user => {
  //   return user.isActive;
  // });
  // log(isSomeUsersActive);
}

/*
 * В методах объекта
 */

{
  // const storage = {
  //   currentId: 1,
  //   _items: [{ id: 0, label: 'item-1' }, { id: 1, label: 'item-2' }],
  //   get items() {
  //     return this._items;
  //   },
  //   add(item) {
  //     this._items = [...this._items, { id: ++this.currentId, ...item }];
  //   },
  //   update(id, label) {
  //     const item = this._items.find(item => item.id === id);
  //     if (item) {
  //       item.label = label;
  //     }
  //     // или так, иммутабельно
  //     // this._items = this._items.map(item => {
  //     //   return item.id === id ? { ...item, label } : item;
  //     // });
  //   },
  //   delete(id) {
  //     this._items = this._items.filter(item => item.id !== id);
  //   },
  // };
  // storage.add({ label: 'item-3' });
  // storage.update(1, 'updated label');
  // storage.delete(0);
  // log(storage.items);
}

/*
 * reduce
 */

// const total = numbers.reduce((accumulator, number) => {
//   return accumulator + number;
// }, 0);

// [1, 2, 3, 4, 5]

// accumulator = 0
// number = 1
// return 1

// accumulator = 1
// number = 2
// return 3

// accumulator = 3
// number = 3
// return 6

// accumulator = 6
// number = 4
// return 10

// accumulator = 10
// number = 5
// return 15

// console.log(total);

// const salary = {
//   mango: 100,
//   poly: 50,
//   ajax: 150,
// };

// const total = Object.values(salary).reduce((acc, value) => {
//   return acc + value;
// }, 0);

// console.log(total);

// const products = [
//   { id: 'id-1', label: 'Apples', price: 100, quantity: 50 },
//   { id: 'id-2', label: 'Bananas', price: 120, quantity: 70 },
//   { id: 'id-3', label: 'Lemons', price: 70, quantity: 30 },
// ];

// const totalQuantity = products.reduce((total, product) => {
//   return total + product.quantity;
// }, 0);
// console.log(totalQuantity);

// const tweets = [
//   { id: '000', likes: 5, tags: ['js', 'nodejs'] },
//   { id: '001', likes: 2, tags: ['html', 'css'] },
//   { id: '002', likes: 17, tags: ['html', 'js', 'nodejs'] },
//   { id: '003', likes: 8, tags: ['css', 'react'] },
//   { id: '004', likes: 0, tags: ['js', 'nodejs', 'react'] },
// ];

// const tags = tweets.reduce((acc, tweet) => {
//   acc.push(...tweet.tags);

//   return acc;
// }, []);

// console.log(tags); // []

// ==============================================================================================
// Part-2
const products = [
  { id: 'id-1', label: 'Apples', price: 100, quantity: 50 },
  { id: 'id-2', label: 'Bananas', price: 120, quantity: 70 },
  { id: 'id-3', label: 'Lemons', price: 70, quantity: 30 },
];

const users = [
  { id: 'id-1', name: 'Mango', isActive: true },
  { id: 'id-2', name: 'Poly', isActive: false },
  { id: 'id-3', name: 'Ajax', isActive: true },
  { id: 'id-4', name: 'Chelsey', isActive: false },
];

// const players = [
//   { id: 'id-1', tag: 'Mango', isOnline: true, rank: 800 },
//   { id: 'id-2', tag: 'Poly', isOnline: false, rank: 600 },
//   { id: 'id-3', tag: 'Ajax', isOnline: true, rank: 100 },
//   { id: 'id-4', tag: 'Kiwi', isOnline: true, rank: 400 },
// ];

// const numbers = [1, 2, 3, 4, 5];

const log = array => console.table(array);

// Sort
// const sortedPlayers = [...players].sort((prev, next) => {
//   // по возрастанию значения свойства
//   // return prev.rank - next.rank;

//   // по убыванию значения свойства
//   return next.rank - prev.rank;
// });

// log(sortedPlayers);

/*
 * filter
 */

// const filter = (array, callback) => {
//   const filteredArray = [];

//   for (let i = 0; i < array.length; i += 1) {
//     const passed = callback(array[i], i, array);

//     if (passed) {
//       filteredArray.push(array[i]);
//     }
//   }

//   return filteredArray;
// };

// log(filter(numbers, number => number > 2));
// log(filter(numbers, number => number < 3));

/*
 * find
 */

// const find = (array, callback) => {
//   for (let i = 0; i < array.length; i += 1) {
//     const passed = callback(array[i], i, array);

//     if (passed) {
//       return array[i];
//     }
//   }
// };

// log(find(numbers, number => number < 3));
// log(find(players, player => player.id === 'id-2'));

/*
 * reduce
 */

// const reduce = (array, callback, initialValue = array[0]) => {
//   let accumulator = initialValue;

//   for (let i = 0; i < array.length; i += 1) {
//     accumulator = callback(accumulator, array[i]);
//   }

//   return accumulator;
// };

// const total = reduce(numbers, (acc, num) => acc + num, 0);
// console.log(total);

// const totalQunatity = reduce(
//   products,
//   (acc, product) => acc + product.quantity,
//   0,
// );
// console.log(totalQunatity);

/*
 * ТАК ДЕЛАТЬ НЕНАДО - ДЛЯ ПРИМЕРА!!!!
 */
// Array.prototype.customReduce = function(callback, initialValue = array[0]) {
//   console.log('this: ', this);
//   let accumulator = initialValue;

//   for (let i = 0; i < this.length; i += 1) {
//     accumulator = callback(accumulator, this[i]);
//   }

//   return accumulator;
// };

// console.log([]);
// console.log([1, 2, 3, 4, 5].customReduce((acc, num) => acc + num, 0));

/*
 * Цепочки вызовов - chaining
 */
const numbers = [1, 5, 2, 4, 3];

// const greaterThenTwo = numbers.filter(num => num > 2);
// console.log(greaterThenTwo);

// const multByTwo = greaterThenTwo.map(num => num * 2);
// console.log(multByTwo);

// const sorted = multByTwo.sort((a, b) => a - b);
// console.log(sorted);

const result = numbers
  .filter(num => num > 2)
  .map(num => num * 2)
  .sort((a, b) => a - b);

console.log(result);

const players = [
  { id: 'id-1', tag: 'Mango', isOnline: true, rank: 800 },
  { id: 'id-2', tag: 'Poly', isOnline: false, rank: 600 },
  { id: 'id-3', tag: 'Ajax', isOnline: true, rank: 100 },
  { id: 'id-4', tag: 'Kiwi', isOnline: true, rank: 400 },
];

const onlineAndSorted = players
  .filter(player => player.isOnline)
  .sort((prevPlayer, nextPlayer) => prevPlayer.rank - nextPlayer.rank);

console.table(onlineAndSorted);