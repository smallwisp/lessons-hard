'use strict'

function getString(str) {
   
   if (typeof str != "string") {
      console.log('Вы ввели не строку!');
   } else {
      
      str = str.trim();
      if (str.length > 30) {
         str = str.slice(0, str.length - 1) + '...'
      } 
      return str;

   }
}

console.log(getString('       12  346748499595858fnfnfnfgjfkfkekfmdngndgj   '));
console.log(getString(234));


