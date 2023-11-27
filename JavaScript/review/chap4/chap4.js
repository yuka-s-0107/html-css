//4-03 if_else.js
const x = 30;
if (x >= 20) {
  console.log("xは20以上です。");
} else if (x >= 10) {
  console.log("xは10以上です。");
} else {
  console.log("xは10未満です。");
}

//4-05 if_nest.js
const y = 13;
if (y >= 10) {
  if (y >= 20) {
    console.log("xは20以上です。");
  } else {
    console.log("xは10以上20未満です。");
  }
} else {
  console.log("xは10未満です。");
}

//4-15 for.js
for (let i = 5; i < 10; i++) {
  console.log(`iの値は${i}です。`);
}

//4-19 for_in.js
const data = {
  apple: 100,
  orange: 110,
  manana: 90,
};
for (const key in data) {
  console.log(`${key}は${data[key]}円です。`);
}

//4-22 for_of.js
const data2 = ["apple", "orange", "banana"];
Array.prototype.hoge = function () {};
for (const value of data2) {
  console.log(value);
}
