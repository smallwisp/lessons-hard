let num = 266219;
let str = num.toString();
let res = 1;
for (const i of str) {
   res *= i
}

let numPow = (res ** 3).toString();

console.log(+numPow.slice(0, 2));


