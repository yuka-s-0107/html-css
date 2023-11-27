//1.引数の数値を2倍した結果を返す関数
function getDoubleValue(num) {
  return num * 2;
}
let double = getDoubleValue(5);
console.log(double);

//【チャレンジ】
//1.引数の数値を2倍した結果を返す関数
let getDoubleValue2 = (num2) => {
  return num2 * 2;
};
console.log(getDoubleValue2(6));

//2.引数の数値配列をすべて足した結果を返す関数
let nums = [1, 3, 5, 7, 9];
let getArraySumValue = nums.reduce(function (result, value) {
  return result + value;
});
console.log(getArraySumValue);

//【チャレンジ】
// 2.引数の数値配列をすべて足した結果を返す関数
let nums2 = [2, 4, 6, 8, 10];
let getArraySumValue2 = nums2.reduce((result, value) => {
  return result + value;
});
console.log(getArraySumValue2);

//3．引数の名前文字列をconsole.logで出力する関数
function printName(name) {
  name = ["侍 花子"];
  return name;
}
console.log(`こんにちは、${printName(name)}さん`);

//【チャレンジ】
//3．引数の名前文字列をconsole.logで出力する関数
let printName2 = (name) => {
  name = ["侍 太郎"];
  return name;
};
console.log(`こんにちは、${printName2(name)}さん`);

// //4.引数の数値配列から最大値を返す関数
// console.log(Math.max(-1, 0, 1, 2));

let i = [-1, 0, 1, 2];
for (let i=-1,i<2,i++) {
  getMaxValue ;
}
console.log();