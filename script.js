'use strict'

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

let assocArr = [];
assocArr['ru'] = russianDays;
assocArr['en'] = englishDays;

console.log(assocArr[lang]);
console.log(assocArr);

let namePerson = prompt('Введите имя:', 'Артем');
(namePerson === 'Артем') ? console.log('директор'):
(namePerson === 'Максим') ? console.log('преподаватель') : console.log('студент');


