'use strict';

// const baseSalary = 30000;
// const overtime = 10;
// const rate = 20;

// const getWage = (baseSalary, overtime, rate) => {
//   return baseSalary + overtime * rate;
// };

// console.log(getWage(baseSalary, overtime, rate));

// const Hotel = function(name, stars, capacity) {
//   this.name = name;
//   this.stars = stars;
//   this.capacity = capacity;
//   this.guestCount = 0;

//   this.greet = function(guestName) {
//     console.log(`Hello ${guestName}, wellcome to ${this.name}`);
//   };

//   this.addGuests = function(amount) {
//     this.guestCount += amount;
//   };

//   this.removeGuests = function(amount) {
//     this.guestCount -= amount;
//   };
// };

// const hotel = new Hotel('Sunrise Hotel', 5, 100);

// console.log(hotel);
// hotel.greet('Mango'); // Hello Mango, wellcome to Sunrise Hotel
// hotel.addGuests(50);
// console.log(hotel);
// hotel.removeGuests(50);
// console.log(hotel);

// const animal = { eats: true };
// const dog = Object.create(animal);
// dog.barks = true;
// console.log(dog);
// console.log(dog.barks); // true
// console.log(dog.eats); // true

// const o = new Object();
// o.prop = 'существует';

// console.log(o);

// function changeO() {
//   // o.newprop = o.prop;
//   delete o.prop;
// }

// console.log(o.hasOwnProperty('prop'));
// changeO();
// console.log(o.hasOwnProperty('prop'));

//==================================================
//Показать собственные ключи
// const animal = { eats: true };
// const dog = Object.create(animal);
// dog.barks = true;

// for (const key in dog) {
//   if (!dog.hasOwnProperty(key)) continue;

//   console.log(key); // barks
// }

//==================================================
//Function.prototype
// const Guest = function(name, room) {
//   this.name = name;
//   this.room = room;
// };

// const mango = new Guest('Mango', 28);

// console.log(mango);

// const Guest = function(name, room) {
//   this.name = name;
//   this.room = room;
// };

// Guest.prototype.showGuestInfo = function() {
//   console.log(`name: ${this.name}, room: ${this.room}`);
// };

// const mango = new Guest('Mango', 28);
// const poly = new Guest('Poly', 36);

// console.log(mango);
// console.log(poly);

// mango.showGuestInfo(); // name: Mango, room: 28
// poly.showGuestInfo(); // name: Poly, room: 36

//==================================================
// Вебинар

// [[Prototype]] === __proto__
// console.log({});

// const Counter = function({ initialValue = 0, step = 1 }) {
//   // this = {}
//   // this.__proto__ = Counter.prototype;

//   this.value = initialValue;
//   this.step = step;

//   // return this;
// };

// Counter.prototype.increment = function() {
//   this.value += this.step;
// };

// const counterA = new Counter({ initialValue: 10, step: 5 });
// console.log('counterA.value: ', counterA.value);
// counterA.increment();
// console.log('counterA.value: ', counterA.value);

// const counterB = new Counter({ initialValue: 100, step: 15 });
// console.log('counterB.value: ', counterB.value);
// counterB.increment();
// console.log('counterB.value: ', counterB.value);

// console.log(counterA, counterB);

// Пример для дз
// const TodoEditor = function(todos = []) {
//   this.todos = todos;
// };

// TodoEditor.prototype.saveTodo = function(todo) {
//   this.todos.push(todo);
// };

// const todoEditor = new TodoEditor();
// todoEditor.saveTodo({ text: 'new todo' });
// console.log(todoEditor);

//==================================================
// Вебинар с примером плагина с HTML
// const Counter = function({ initialValue = 0, step = 1 }) {
//   // this = {}
//   // this.__proto__ = Counter.prototype;

//   this.value = initialValue;
//   this.step = step;

//   // return this;
// };

// Counter.prototype.increment = function() {
//   this.value += this.step;
// };

// Counter.prototype.decrement = function() {
//   this.value -= this.step;
// };

// const counter = new Counter({ initialValue: 10, step: 5 });

// const counterValueField = document.querySelector('.js-counter-value');
// const incrementBtn = document.querySelector('button[data-action="increment"]');
// const decrementBtn = document.querySelector('button[data-action="decrement"]');

// const udateCounterValueField = () => {
//   counterValueField.textContent = counter.value;
// };

// udateCounterValueField();

// incrementBtn.addEventListener('click', () => {
//   counter.increment();
//   // console.log('clicked increment!');
//   // console.log('counter.value: ', counter.value);
//   udateCounterValueField();
// });

// decrementBtn.addEventListener('click', () => {
//   counter.decrement();
//   udateCounterValueField();
// });

// console.dir(counterValueField);
// console.dir(incrementBtn);
// console.dir(decrementBtn);

//==================================================
// Вебинар вторая часть
// // const fn = function() {
// //   console.log(this);
// // };

// // fn();

// // const showLabel = function() {
// //   console.log(this);
// //   console.log(this.label);
// // };

// // const product = {
// //   label: 'Adidas',
// // };

// // product.showLabel = showLabel;

// // product.showLabel();

// // console.log(product.showLabel);

// // const printLabel = function(callback) {
// //   const label = callback();

// //   console.log(`Product label: ${label}`);
// // };

// // printLabel(product.showLabel);

// // const showLabel = () => {
// //   console.log(this);
// //   console.log(this.label);
// // };

// // showLabel();

// // const product = {
// //   label: 'Adidas',
// //   showLabel() {
// //     console.log(this);
// //     console.log(this.label);

// //     const fn = () => {
// //       console.log(this);
// //     };

// //     console.log('product: ', product);

// //     // const fn = function() {
// //     //   console.log(this);
// //     // };

// //     fn();
// //   },
// // };

// // product.showLabel();

// // const sell = function(product, price) {
// //   console.log(`Manager ${this.name} sold ${product} for ${price}`);
// //   this.sales += 1;
// // };

// // const mango = {
// //   name: 'Mango',
// //   sales: 10,
// // };

// // const poly = {
// //   name: 'Poly',
// //   sales: 20,
// // };

// // sell.call(mango, 'TV', 50);
// // sell.call(poly, 'GPU', 100);

// // sell.apply(mango, ['TV', 50]);
// // sell.apply(poly, ['GPU', 100]);

// // mango.sell('TV');

// // poly.sell('GPU');

// // bind

// // const product = {
// //   label: 'Adidas',
// //   showLabel() {
// //     console.log(this);
// //     console.log(this.label);

// //     return this.label;
// //   },
// // };

// // const printLabel = function(callback) {
// //   const label = callback();

// //   console.log(`Product label: ${label}`);
// // };

// // // const boundShowLabel = product.showLabel.bind(product);

// // printLabel(product.showLabel.bind(product));

// // Конструкторы ==============================================
// // const Manager = function(name, sales = 0) {
// //   // this = {}

// //   this.name = name;
// //   this.sales = sales;

// //   this.sell = function(product, price) {
// //     console.log(`Manager ${this.name} sold ${product} for ${price}`);
// //     this.sales += 1;
// //   };

// //   // return this;
// // };

// // const mango = new Manager('Mango', 5);
// // console.log(mango);
// // mango.sell('TV', 50);

// // const poly = new Manager('Poly', 10);
// // console.log(poly);
// // poly.sell('GPU', 100);

// // const makeSound = function() {
// //   console.log(this.sound);
// // };

// // const dog = {
// //   sound: 'woof',
// // };

// // dog.bark = makeSound;

// // const fn = function(callback) {
// //   callback();
// // };

// // fn(dog.bark.bind(dog));

// // const dog = {
// //   sound: 'woof',
// //   fn() {
// //     const makeSound = () => {
// //       console.log(this);
// //       console.log(this.sound);
// //     };

// //     return makeSound;
// //   },
// // };

// // const makeSound = dog.fn();

// // makeSound();

// =====================================================================================================
// Prototipes

// const animal = {
//     barks: true,
//   };

//   // const dog = {
//   //   sound: 'woof',
//   // };
//   // dog.__proto__ = animal;

//   const dog = Object.create(animal);
//   dog.sound = 'woof';

//   console.log('dog: ', dog);

//   // console.log(dog.sound);
//   // console.log(dog.barks);
//   // console.log('dog.hasOwnProperty("sound"): ', dog.hasOwnProperty('sound'));
//   // console.log('dog.hasOwnProperty("barks"): ', dog.hasOwnProperty('barks'));
//   // console.log(dog.qwe);

//   // for (const key in dog) {
//   //   if (!dog.hasOwnProperty(key)) continue;

//   //   console.log(key);
//   // }

//   const Hero = function(name, xp) {
//     // this = Object.create(Hero.prototype)
//     this.name = name;
//     this.xp = xp;

//     // return this
//   };

//   Hero.prototype.changeName = function(name) {
//     console.log('this: ', this);
//     this.name = name;
//   };

//   console.log('Hero.prototype: ', Hero.prototype);

//   const mango = new Hero('Mango', 1000);
//   mango.changeName('Mango the great');
//   console.log(mango);

//   console.log(
//     'mango.__proto__ === Hero.prototype: ',
//     mango.__proto__ === Hero.prototype,
//   );

//   const poly = new Hero('Poly', 2000);
//   poly.changeName('Poly the magnificent');
//   console.log(poly);

//   console.log(
//     'poly.__proto__ === Hero.prototype: ',
//     poly.__proto__ === Hero.prototype,
//   );

// =====================================================================================================
// Классы

// class Hero {
//     static randomProp = 'random prop value';

//     static doStuff() {}

//     constructor(name, xp) {
//       this._name = name;
//       this.xp = xp;
//     }

//     // Публичное свойство класса
//     // this.a
//     a = 5;

//     //this.gainXp
//     gainXp = amount => {
//       this.xp += amount;
//       console.log(this.xp);
//     };

//     set name(newName) {
//       this._name = newName;
//     }

//     get name() {
//       return this._name;
//     }
//   }

//   const mango = new Hero('Mango', 1000);

//   console.log(mango);

//   console.log(mango.name);
//   mango.name = 'Poly';

//   console.log(mango.name);

//   const fn = function(callback) {
//     callback(1000);
//   };

//   fn(mango.gainXp);

// ====================================================================================
// RPG Games

// class Hero {
//     constructor(name, xp) {
//       this.name = name;
//       this.xp = xp;
//     }

//     gainXp(amount) {
//       console.log(`${this.name} gained ${amount} experience points`);
//       this.xp += amount;
//     }
//   }

//   class Warrior extends Hero {
//     constructor(name, xp, weapon) {
//       super(name, xp);
//       this.weapon = weapon;
//     }

//     attack() {
//       console.log(`${this.name} attacks with ${this.weapon}`);

//       super.gainXp(10);
//     }
//   }

//   const mango = new Warrior('Mango', 1000, 'axe');
//   console.log(mango);
//   mango.attack();

//   class Berserk extends Warrior {
//     constructor(name, xp, weapon, roar) {
//       super(name, xp, weapon);

//       this.roar = roar;
//     }

//     battlecry() {
//       console.log(this.roar);
//     }
//   }

//   const poly = new Berserk('Poly', 1000, 'halberd', 'Waaaaaaaaah!');

//   console.log(poly);

//   poly.battlecry();

