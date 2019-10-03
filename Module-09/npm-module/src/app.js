// const messageModule = require('./message');

import QWE from './message.js';
import { fetchArticles } from './api.js'; //Именованный импорт
import * as API from './api.js'; //Импортировать все

console.log(QWE());
API.authUser();
API.fetchArticles();

fetchArticles();
// const shortid = require('shortid');//Подключение пакета

// console.log(shortid.generate());

// const a = () => {
//   console.log('yooouuuuuuuuhhhh');
// };

// console.log('Hello');
