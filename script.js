'use strict'

function getString(str) {
   let pos = 0;
   let subStr = str;
   if (typeof str != "string") {
      console.log('Вы ввели не строку!');
   } else {
      while (subStr.startsWith(' ')) {
         subStr = str.slice(pos);    
         pos++;
      }
      while (subStr.endsWith(' ')) {
         subStr = subStr.slice(0, str.length - pos);    
         pos++;
      }
      if (subStr.length > 30) {
         subStr = subStr.slice(0, subStr.length - 1) + '...'
      }

   }
   return subStr;
}

console.log(getString('       12  346748499595858fnfnfnfgjfkfkekfmdngndgj   '));
console.log(getString(234));


