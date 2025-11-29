// 2 masala
// let numbers = [2, 5, 8, 10];
// numbers.forEach((num) => {
//   console.log(num * 2);
// });

// 3 masala
// let names = ["humoyun", "Umarali", "Umid", "Sardor"];
// names.forEach((name) => {
//   console.log("Salom " + name);
// });

// 4 masala
// let fn = ["sardor", "humoyun", "umarali", "dunyo"];
// fn.forEach((word) => {
//   console.log(word.length);
// });

// 5 masala
// let numbers = [2, 3, 5, 7, 10];
// let result = numbers.map((num) => num * num);
// console.log(result);

// 6 masala
// let names = ["sardor", "umarali", "humoyun"];
// let result = names.map((name) => name[0].toUpperCase() + name.slice(1));
// console.log(result);

// 7 masala
// let numbers = [2, 5, 8, 11, 14, 21, 30];
// let result = numbers.filter((num) => num % 2 === 0);
// console.log(result);

// 8 masala
// let fn = ["salom", "dunyo", "javascript", "olma", "telefon"];
// let result = fn.filter((word) => word.length > 5);
// console.log(result);

// 9 masala
// let numbers = [3, 7, 10, 12, 5, 20];
// let result = numbers.find((num) => num > 10);
// console.log(result);

// 10 masala
// let names = ["Sardor", "Ali", "Umid", "Aziz", "Humoyun"];
// let result = names.find((name) => name.startsWith("A"));
// console.log(result);

// 11 masala
// let numbers = [5, 3, 0, -2, 7, -1];
// let index = numbers.findIndex((num) => num < 0);
// console.log(index);

// 12 masala
// let numbers = [5, 3, 0, -2, 7];
// let result = numbers.some((num) => num < 0);
// console.log(result);

// 13 masala
// let users = ["user1", "count", "admin", "moderator"];
// let result = users.some((user) => user === "admin");
// console.log(result);

// 14 masala
// let numbers = [5, 3, 8, 10];
// let result = numbers.every((num) => num > 0);
// console.log(result);

// 15 masala
// let words = ["salom", "dunyo", "olma", "kitob"];
// let result = words.every((word) => word.length >= 4);
// console.log(result);

// 16 masala
// let words = ["salom", "dunyo", "olma", "kitob"];
// let result = words.reduce((acc, word) => acc + " " + word);
// console.log(result);

// 17 masala
// let words = ["salom", "dunyo", "olma", "kitob"];
// let result = words.reduce((son, word) => son + word.length, 0);
// console.log(result);

// 18 masala
// let numbers = [5, 12, 7, 20, 3];
// let maxNumber = numbers.reduce(
//   (max, num) => (num > max ? num : max),
//   numbers[0]
// ); console.log(maxNumber);

// 19 masala
// let words = ["olma", "banan", "olma", "nok", "banan", "olma"];
// let result = words.reduce((acc, word) => {
//   acc[word] = (acc[word] || 0) + 1;
//   return acc;
// }, {});
// console.log(result);

// 20 masala
// let numbers = [-5, 10, 0, 7, -2, 3];
// let result = numbers.filter((num) => num > 0).map((num) => num / 2);
// console.log(result);

// Math
// 21 masala
// let code = Math.floor(100000 + Math.random() * 900000);
// console.log(code);

// 22 masala
// function fn () {
//   return Math.floor(100000 + Math.random() * 900000);
// } console.log(fn ());

// 23 masala
// let numbers = [5, 12, 7, 20, 3];
// let maxNumber = Math.max(...numbers);
// let minNumber = Math.min(...numbers);
// console.log("Max:", maxNumber);
// console.log("Min:", minNumber);

// 24 masala
// function fn () {
//   function isPrime(num) {
//     if (num < 2) return false;
//     for (let i = 2; i <= Math.sqrt(num); i++) {
//       if (num % i === 0) return false;
//     }
//     return true;
//   }
//   let prime;
//   do {
//     prime = Math.floor(Math.random() * 100) + 1;
//   } while (!isPrime(prime));
//   return prime;
// } console.log(fn());

// 25 masala
// let result = Math.floor(Math.random() * 51);
// console.log(result);
