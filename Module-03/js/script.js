'use strict';

// const hotel = {
//   name: 'Resort Hotel',
//   stars: 5,
//   capacity: 100,
// };

// console.log(hotel);
// console.log(hotel.name); // Resort Hotel
// console.log(hotel['name']); // Resort Hotel

// hotel.name = 'California Hotel';
// console.log(hotel);

// hotel.address = '1, Beach ave.';
// hotel['manager'] = 'Chuck Norris';
// console.log(hotel);

//===========================================================

// let name = 'Resort Hotel Spa';
// let stars = 5;

// const es6hotel = {
//   name,
//   stars,
//   capacity: 100,
// };

// console.log(es6hotel);

// ===========================================================

// const key = 'person';
// const object = {};
// console.log(object);

// object[key] = 'Mango';
// console.log(object); // {person: 'Mango'}

//Вычисляемые свойства
// ===========================================================

// const key = 'person';
// const getKey = function() {
//   return 'age';
// };

// // Computed properties
// const object = {
//   [key]: 'Mango',
//   [getKey()]: 2,
// };

// console.log(object); // {person: 'Mango', age: 2}

// ===========================================================

// const hotel = {
//   name: 'Resort Hotel',
//   stars: 5,
//   capacity: 100,
//   greetInES6() {
//     console.log('Welcome!');
//   },
// };

// console.log(hotel);
// console.log(hotel.greetInEs6());

// ===========================================================

// const hotel = {
//   name: 'Resort Hotel',
//   stars: 5,
//   capacity: 100,
// };

// hotel.greet = function() {
//   console.log('Welcome!');
// };

// console.log(hotel);
// console.log(hotel.name);
// hotel.greet(); // Welcome!

// =========================================================== НЕ ПОНЯЛ
// Замена switch

// const fruitsByColor = {
//   red: ['apple', 'strawberry'],
//   yellow: ['banana', 'pineapple'],
//   purple: ['grape', 'plum'],
// };

// function getFruitsWithColor(color) {
//   return fruitsByColor[color] || [];
// }

// console.log(getFruitsWithColor(red));

// ===========================================================
// ПЕРЕБОР ОБЪЕКТА

// const hotel = {
//   name: 'Resort Hotel',
//   stars: 5,
//   capacity: 100,
// };

// // Перебор ключей объекта hotel
// for (const key in hotel) {
//   console.log('Key: ', key);
// }

// Получить значение свойства с таким ключом во время итерации

// const hotel = {
//   name: 'Resort Hotel',
//   stars: 5,
//   capacity: 100,
// };

// for (const key in hotel) {
//   console.log('Value: ', hotel[key]);
// }

// /*
//  * Value: "Resort Hotel"
//  * Value: 5
//  * Value: 100
//  */

// console.log(typeof hotel.stars);
// console.log(hotel.stars);

// Object.keys(), Object.values(), Object.entries() ============================

// const hotel = {
//   name: 'Resort Hotel',
//   stars: 5,
//   capacity: 100,
// };

// console.log(Object.keys(hotel));
// console.log(Object.values(hotel));
// console.log(Object.entries(hotel));

//================================================================================

// const hotel = {
//   name: 'Resort Hotel',
//   stars: 5,
//   capacity: 100,
// };

// const entries = Object.entries(hotel);
// console.log(entries);

// /*
//  * На каждой итерации по entries выберем первый элемент подмассива (ключ)
//  * в переменную key, а второй (значение) в переменную value
//  */
// for (const entry of entries) {
//   const key = entry[0];
//   const value = entry[1];

//   console.log(`${key}: ${value}`);
// }

/*
 * name: Resort Hotel
 * stars: 5
 * capacity: 100
 */

//=========================================================
// СУММА ВСЕХ ЗНАЧЕНИЙ КЛЮЧЕЙ

// const goods = {
//   apples: 6,
//   grapes: 13,
//   bread: 4,
//   cheese: 71,
// };

// const values = Object.values(goods);

// let sum = 0;

// for (const value of values) {
//   sum += value;
// }

// console.log(sum);

// ===========================================================
//Операция spread
//Распыление массивов

// const houses = ['Arryn', 'Frey', 'Greyjoy', 'Stark', 'Lannister', 'Tyrell'];

// // Вертикальная запись удобнее для чтения
// const updatedHouses = [
//   ...houses.slice(0, 1),
//   'Frey of the Crossing',
//   ...houses.slice(2),
// ];

// console.log(updatedHouses);
// // ['Arryn', 'Frey of the Crossing', 'Greyjoy', 'Stark', 'Lannister', 'Tyrell']

// ===========================================================

//Распыление ОБЪЕКТОВ

// const a = { x: 1, y: 2 };
// const b = { x: 0, z: 3 };

// // const c = Object.assign({}, a, b);
// // console.log(c); // {x: 0, y: 2, z: 3}

// // То же самое используя операцию spread
// const c = { ...a, ...b };

// console.log(c); // {x: 0, y: 2, z: 3}
// console.log(a); // {x: 0, y: 2, z: 3}
// console.log(b); // {x: 0, y: 2, z: 3}

// const a = { x: 1, y: 2 };
// const b = { x: 0, z: 3 };

// const c = { x: 5, j: 10, ...a, z: 15, ...b };
// console.log(c); // {x: 0, j: 10, y: 2, z: 3}

// ===========================================================
// REST

// const add = function(...args) {
//   console.log(args); // массив всех аргументов
//   console.log(Math.max(...args));
// };

// add(1, 2, 3);
// add(1, 2, 3, 4, 5);

// const add = function(value, a, ...args) {
//   console.log(value); // первый аргумент
//   console.log(a);
//   console.log(args); // массив всех остальных аргументов
// };

// add(10, 1, 2, 3);
// add(15, 'cccc', 3, 4, 5);

// ===========================================================
// Деструктуризация объектов

// const hotel = {
//   name: 'Resort Hotel',
//   stars: 5,
//   capacity: 100,
// };

// Объявим переменные и присвоим им значения из объекта
// const { name, stars, status } = hotel;

// console.log(name, stars, status); // "Resort Hotel", 5, undefined

// // console.log(hotel);

//====================================================================

// const student = {
//   name: 'John Doe',
//   age: 16,
//   scores: {
//     maths: 74,
//     english: 63,
//     science: 85,
//   },
// };

// function displaySummary({
//   name,
//   scores: { maths = 0, english = 0, science = 0 },
// }) {
//   console.log('Hello, ' + name);
//   console.log('Your Maths score is ' + maths);
//   console.log('Your English score is ' + english);
//   console.log('Your Science score is ' + science);
// }

// displaySummary(student);

//====================================================================

// const student = {
//   firstname: 'Glad',
//   lastname: 'Chinda',
//   country: 'Nigeria',
// };

// // Деструктуризація об'єкта
// const { firstname, lastname, country } = student;

// console.log(firstname, lastname, country); // Glad Chinda Nigeria

//======================================================================================
// THIS

// const hotel = {
//   name: 'Resort Hotel',
//   stars: 5,
//   capacity: 100,
//   showName() {
//     console.log(this.name);
//   },
//   changeCapacity(value) {
//     this.capacity = value;
//   },
// };

// hotel.showName(); // Resort Hotel

// hotel.changeCapacity(200);
// console.log(hotel.capacity); // 200

//======================================================================================
//ВЕБИНАР

// const product = {
//   name: 'Wunder Waffles',
//   description: 'In hac habitasse platea dictumst.',
//   price: 30,
// };

// const key = 'name';

// console.log(product.name);
// console.log(product[key]);

// product.price = 50;

// console.log(product.qwe);

// Shorthand proprties
// const makeProduct = (name, price) => {
//   // return {
//   //   name: name,
//   //   price: price,
//   // };

//   return {
//     name,
//     price,
//     id: 1,
//   };
// };

// console.log(makeProduct('Apples', 50));

// Computed properties
// const key = 'name';
// const value = 10;

// const obj = {
//   a: 1,
//   [`key value ${2 + 2}`]: value,
// };

// // obj[key] = value;

// console.log(obj);

// input name="login" value="mango"
// input name="email" value="mail@mail.com"

// const target = {
//   name: 'email',
//   value: 'mail@mail.com',
// };

// const formData = {
//   [target.name]: target.value,
// };

// console.log(formData);

// const product = {
//   name: 'Wunder Waffles',
//   description: 'In hac habitasse platea dictumst.',
//   price: 30,
//   changePrice(newPrice) {
//     console.log('this: ', this);
//     this.price = newPrice;
//   },
// };

// product.changePrice(100);

// console.log(product.price);

// Работа с коллекцией ====================================
// const storage = {
//   items: [
//     { id: 'id-1', name: 'apples', price: 30 },
//     { id: 'id-2', name: 'grapes', price: 40 },
//   ],
//   getItems() {
//     return this.items;
//   },
//   addProduct(product) {
//     this.items.push(product);
//   },
//   removeProduct(id) {
//     for (let i = 0; i < this.items.length; i += 1) {
//       const product = this.items[i];

//       if (product.id === id) {
//         console.log('i: ', i);
//         console.log('product: ', product);
//         this.items.splice(i, 1);
//       }
//     }
//   },
// };

// console.table(storage.getItems());

// storage.addProduct({ id: 'id-3', name: 'carrots', price: 20 });

// console.table(storage.getItems());

// storage.removeProduct('id-1');

// console.table(storage.getItems());

// for...in

// const product = {
//   name: 'waffles',
//   price: 50,
//   quantity: 20,
// };

// for (const key in product) {
//   console.log(`key: ${key}, value: ${product[key]}`);
// }

// const keys = Object.keys(product);
// console.log(keys);

// for (const key of keys) {
//   console.log(`key: ${key}, value: ${product[key]}`);
// }

// const salary = {
//   bob: 100,
//   mary: 200,
//   dick: 300,
// };

// let total = 0;

// for (const key in salary) {
//   console.log(`key: ${key}, value: ${salary[key]}`);

//   total += salary[key];
// }

// console.log('total: ', total);

// const salaryValues = Object.values(salary);
// console.log(salaryValues);

// for (const value of salaryValues) {
//   total += value;
// }

// console.log('total: ', total);

// const taskCompleted = {
//   ann: 29,
//   david: 35,
//   helen: 1,
//   lorence: 99,
// };

// let max = 0;
// let name;

// const keys = Object.keys(taskCompleted);
// // console.log(keys);

// for (const key of keys) {
//   //   console.log(key);
//   //   console.log(taskCompleted[key]);

//   if (max < taskCompleted[key]) {
//     max = taskCompleted[key];
//     name = key;
//   }
// }

// console.log(name);
// console.log(max);

// =====================================================================================
//Найти самое большое значение и его ключ

// const findPersonWithMaxTasks = function(stats) {
//   let max = 0;
//   let name;

//   const keys = Object.keys(stats);

//   for (const key of keys) {
//     if (max < stats[key]) {
//       max = stats[key];
//       name = key;
//     }
//   }

//   return {
//     name,
//     tasksCompleted: max,
//   };
// };

// const taskCompleted = {
//   ann: 29,
//   david: 35,
//   helen: 1111,
//   lorence: 99,
// };

// console.log(findPersonWithMaxTasks(taskCompleted));

// const taskCompleted2 = {
//   ann: 29,
//   david: 135,
//   helen: 1,
//   lorence: 99,
// };

// console.log(findPersonWithMaxTasks(taskCompleted2));

//===================================================================================================
//LESSON - 02

// const add = function(...args) {
//     console.log(args); // массив всех аргументов
//   };

//   add(1, 2, 3);
//   add(1, 2, 3, 4, 5);

// Работа с коллекцией
const storage = {
  items: [
    { id: 'id-1', name: 'apples', price: 30 },
    { id: 'id-2', name: 'grapes', price: 40 },
  ],
  getItems() {
    return this.items;
  },
  addProduct(product) {
    this.items.push(product);
  },
  findProduct(id) {
    for (let i = 0; i < this.items.length; i += 1) {
      const product = this.items[i];

      if (product.id === id) {
        return product;
      }
    }
  },
  removeProduct(id) {
    for (let i = 0; i < this.items.length; i += 1) {
      const product = this.items[i];

      if (product.id === id) {
        console.log('i: ', i);
        console.log('product: ', product);
        this.items.splice(i, 1);
        return;
      }
    }
  },
  changePrice(id, price) {
    const product = this.findProduct(id);

    //  guard clause - если все плохо - ВЫХОДИМ!
    if (!product) {
      return;
    }

    product.price = price;
  },
  changeName(id, name) {
    const product = this.findProduct(id);

    //  guard clause - если все плохо - ВЫХОДИМ!
    if (!product) {
      return;
    }

    product.name = name;
  },
  getProductNames() {
    const names = [];

    for (const { name } of this.items) {
      names.push(name);
    }

    return names;
  },
  filterWithPrice(threshold) {
    const filtered = [];

    for (const item of this.items) {
      if (item.price >= threshold) {
        filtered.push(item);
      }
    }

    return filtered;
  },
};

console.table(storage.getItems());

storage.addProduct({ id: 'id-3', name: 'carrots', price: 20 });
console.table(storage.getItems());

storage.removeProduct('id-1');
console.table(storage.getItems());

storage.changePrice('id-3', 100);
console.table(storage.getItems());

console.table(storage.getProductNames());

console.table(storage.filterWithPrice(60));
