//if.js
let a = 15;

if (a >= 10) {
  console.log("変数aは10以上です。");
} else {
  console.log("変数aは10未満です。");
}

//if_simple.js
let b = 15;

if (b >= 10) {
  console.log("変数bは10以上です。");
}

//if_else.js
let c = 30;

if (c >= 20) {
  console.log("変数cは20以上です。");
} else if (c >= 10) {
  console.log("変数cは10以上です。");
} else {
  console.log("変数cは10未満です。");
}

//if_nest.js
let d = 30;

if (d >= 10) {
  if (d >= 20) {
    console.log("変数dは20以上です。");
  } else {
    console.log("変数dは10以上20未満です。");
  }
} else {
  console.log("変数dは10未満です。");
}

//switch.js
let rank1 = "B";

switch (rank1) {
  case "A":
    console.log("Aランクです。");
    break;
  case "B":
    console.log("Bランクです。");
    break;
  case "C":
    console.log("Cランクです。");
    break;
  default:
    console.log("ランク外です。");
    break;
}

//switch_fall.js
let rank2 = "B";
switch (rank2) {
  case "A":
  case "B":
  case "C":
    console.log("合格！");
    break;
    console.log("不合格・・・");
    break;
}

//while.js
let e = 5;

while (e < 10) {
  console.log(`eの値は${e}`);
  e++;
}

//do.js
let f = 5;

do {
  console.log(`fの値は${f}`);
  f++;
} while (f < 10);

//while.js
let g = 10;

while (g < 10) {
  console.log(`iの値は${g}`);
  g++;
}

//do.js
let h = 10;

do {
  console.log(`hの値は${h}`);
  h++;
} while (h < 10);

//for.js
for (let i = 5; i < 10; i++) {
  console.log(`iの値は${i}`);
}

//conmma.js
for (let j = 1, k = 1; j < 5; j++, k++) {
  console.log(`j*kは${j * k}`);
}

//for_in.js
let data1 = {
  apple: 150,
  orange: 100,
  banana: 120,
};

for (let key in data1) {
  console.log(`${key}=${data1[key]}`);
}

//for_of.js
let data2 = ["apple", "orange", "banana"];
Array.prototype.hoge = function () {};

for (let value of data2) {
  console.log(value);
}

//for_of_nest.js
let books1 = [
  ["ゼロからわかるTypeScript入門", "技術評論社"],
  ["これからはじめるVue.js 3実践入門", "SBクリエイティブ"],
  ["Bootstrap 5 フロントエンド開発の教科書", "技術評論社"],
];

for (let [title, publisher] of books1) {
  console.log(`${title}(${publisher}刊行)`);
}

//for_of_nest_odj.js(isbnも表示するようアレンジ)
let books2 = [
  {
    isbn: "978-4-297-12635-3",
    title: "ゼロからわかる TypeScript入門",
    publisher: "技術評論社",
  },
  {
    isbn: "978-4-8156-1336-5",
    title: "これからはじめるVue.js 3実践入門",
    publisher: "SBクリエイティブ",
  },
  {
    isbn: "978-4-666-1818-1",
    title: "Bootstrap 5 フロントエンド開発の教科書",
    publisher: "技術評論社",
  },
];

for ({ isbn, title, publisher } of books2) {
  console.log(`${isbn} ${title}(${publisher}刊行)`);
}

//for_each.js
let data3 = ["apple", "orange", "banana"];

data3.forEach(function (value, index, array) {
  console.log(value);
});
