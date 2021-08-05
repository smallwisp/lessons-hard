'use strict'

let arr = ['5648093', '1200329', '0989654', '2102789', '4471936', '9999554', '2779311'];


for (const i of arr) {
   if (i.startsWith('2') || i.startsWith('4')) {
      console.log(i);
   } 
}

nextIteration:
for (let i = 2; i < 100; i++) {
   for (let j = 2; j < i; j++) {
      if (i % j == 0) continue nextIteration;
      
   }
   console.log(`${i} Делители этого числа: 1 и ${i}`);
}
