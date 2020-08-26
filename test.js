const arr = [1, 3, 2, 4, 6, 5, 8, 7];

console.log(arr.map(n => n * 2));
console.log(arr.filter(n => n%3 === 0));
console.log(arr.find(n => n > 4));
console.log(arr.every(n => n !== 0));
console.log(arr.some(n => n > 8));
console.log(arr.includes(5));
console.log(arr.reduce((n, m) => n + m));
console.log(arr.sort((n, m) => n > m ? 1 : -1));