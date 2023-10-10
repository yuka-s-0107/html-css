// 1~5までを格納した配列「numbers」を作成
let numbers = [1, 2, 3, 4, 5];
let [x0, x1, x2, x3, x4] = numbers;

// 配列の各数値を全て足した結果を定数「sum」に格納、コンソール出力する
const sum = x0 + x1 + x2 + x3 + x4;
console.log(sum);

// オブジェクト「user」を作成する
let user = {
  name: "花子",
  age: 20,
  hobbies: "音楽、読書、水泳",
};

// オブジェクトの各プロパティを分割代入で定数に格納する
let { name, age, hobbies } = user;
console.log(name);
console.log(age);
console.log(hobbies);
