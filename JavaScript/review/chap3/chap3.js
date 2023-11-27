//3-01 plus.js
console.log("Java" + "Script");
console.log("10" + "1");
console.log(5 + "6");
const today = new Date();
console.log(1234 + today);

//3-02 minus.js
console.log("Java" - "Script");
console.log("10" - "1");
console.log(5 - "6");
const today2 = new Date();
console.log(1234 - today);

//3-08 equal.js
let x = 1;
const y = x;
x = 2;
console.log(y);

let data1 = [0, 1, 2];
const data2 = data1;
data1[0] = 5;
console.log(data2);

//3-10 destruct.js
const number = [56, 40, 26, 81, 38, 19, 77];
const [x0, x1, x2, x3, ...other] = number;
console.log(x0);
console.log(other);

//3-14 destruct_ojg.js
const book = {
  title: "Javaのすべて",
  publisher: "○○評論社",
  price: 2680,
  other: { keywd: "Java SE 18", logo: "logo.jpg" },
};

console.log(book.title);
console.log(book.other);
console.log(book.other.keywd);
