//2-09 template.js
const name = "鈴木";
const str = `こんにちは、${name}さん。\
今日も良い天気ですね。`;
console.log(str);

//2-10 list.js
const data = ["JavaScript", "Python", "PHP", "Ruby"];
console.log(data[2]);

//2-12 list_nest.js
const data2 = [
  ["JavaScript", "js"],
  ["Python", "py"],
  ["Ruby", "rb"],
];
console.log(data2[0][1]);

//2-14 object_nest.js
const book = {
  title: "JavaScript入門書",
  auther: {
    name: "山田はじめ",
    address: "千葉県小金井市三丁目",
  },
  price: 2900,
};
console.log(book.auther.name);
console.log(book["auther"]["name"]);
