'use strict'

/* let num = 266219;
let str = num.toString();
let res = 1;
for (const i of str) {
   res *= i
}

let numPow = (res ** 3).toString();

console.log(+numPow.slice(0, 2)); */

let russianDays = ['Понедельник','Вторник','Среда','Четверг','Пятница','Суббота','Воскресенье'];
let englishDays = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

let lang = prompt('Введите используемый язык:', 'ru');

if (lang === 'ru') {
   console.log(russianDays);
} else if (lang === 'en') {
   console.log(englishDays);
} else {
   console.log('your language is not supported!');
}

switch (lang) {
   case 'ru':
   console.log(russianDays);
      break;
   case 'en':
   console.log(englishDays);
      break;
   default:
   console.log('your language is not supported!');
      break;
}

let assocArr = {
   'ru' : russianDays,
   'en' : englishDays
}

console.log(assocArr[lang]);

let namePerson = prompt('Введите имя:', 'Артем');
(namePerson === 'Артем') ? console.log('директор'):
(namePerson === 'Максим') ? console.log('преподаватель') : console.log('студент');


