let num = 266219;
let str = num.toString();
let res = 1;
for (const i of arr) {
   res *= i
}

let numPow = (res ** 3).toString();

console.log(+(numPow[0] + numPow[1]));


