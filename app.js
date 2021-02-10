'use strick';
const number = process.argv[2] || 0;
let sum = 0;
for (let i = 2;i <= number; i++) {
    sum = sum + i;
}
console.log(sum);
const a =  process.argv[3] || 0;
console.log(a)