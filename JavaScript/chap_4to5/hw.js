//1. 条件分岐(if-elseif-else)
const value = Math.floor(Math.random() * 50);

if (value <= 10) {
  console.log("少ないです。");
} else if (value <= 20) {
  console.log("普通です。");
} else {
  console.log("多いです。");
}

//２．繰り返し（for）
for (let i = 1; i <= 5; i++) {
  console.log(`現在、${i}回目です。`);
}

//3.オブジェクトの繰り返し（for in)
let user = {
  name: "花子",
  age: 20,
  hobbies: ["音楽", "読書", "水泳"],
};

for (let key in user) {
  console.log(`${key}=${user[key]}`);
}

//4.配列の繰り返し（for of）
// let numbers = [1, 2, 3, 4, 5];
// Array.prototype.hoge = function () {};

// for (let key of numbers) {
//   console.log((key += key));
// }

// const numbers = [1, 2, 3, 4, 5];
// let sum = 0;
// for (let val of numbers) {
//   sum += val;
// }
// console.log(`結果は${sum}です。`);

//５．条件分と繰り返し★チャレンジ
// if (value % 4 === 0) {
//   console.log(`4の倍数です。${value}`);
// } else if (value === 13) {
//   console.log(`値は13です。`);
// } else {
//   console.log("4の倍数でも、13でもありません。");
// }

for (let i = 1; i <= value; i++) {
  if (i % 4 === 0) {
    console.log(`4の倍数です。${i}`);
  }
}

const nums = [1, 2, 3, 4, 5];
let multi = 1;
for (let val of nums) {
  multi *= val;
}
console.log(multi);
