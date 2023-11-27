//6-01
// let base = 10;
// let height = 4;
// let area = (base * height) / 2;
// console.log(area);

// //6-02
// function getTriangleArea(base, height) {
//   return (base * height) / 2;
// }

// let area = getTriangleArea(10, 4);
// console.log(area);

//6-04
// let getTriangleArea = new Function("base", "height", "return base*height/2;");
// console.log(getTriangleArea(10, 4));

// //6-06
// let getTriangleArea = function (base, height) {
//   return (base * height) / 2;
// };

// console.log(getTriangleArea(10, 4));

// //6-07
// let getTriangleArea = (base, height) => {
//   return (base * height) / 2;
// };
// console.log(getTriangleArea(10, 4));

//6-08
// function getTriangleArea(base, height) {
//   return (base * height) / 2;
// }

// console.log(getTriangleArea(10, 4));
// getTriangleArea = 0;
// console.log(getTriangleArea);

// //6-09
// function getTriangleArea(base, height) {
//   return (base * height) / 2;
// }
// console.log(getTriangleArea); //関数がそのまま出力される。

//6-10
// console.log(getTriangleArea(5, 2));

// function getTriangleArea(base, height) {
//   return (base * height) / 2;
// }

// // //6-12
// function checkScope() {
//   let scope = "blockScope";
//   return scope;
// }
// console.log(checkScope());
// console.log(scorp);

//6-13
// let scope = "globalScope";
// function checkScope() {
//   return scope;
// }
// console.log(checkScope());
// console.log(scope);

//6-14
// let scope = "Global Scope";
// function getValue() {
//   let scope = "Block Scope";
//   return scope;
// }
// console.log(getValue());
// console.log(scope);

//6-15
// let value = 10;
// function decrement(value) {
//   value--;
//   return value;
// }
// console.log(decrement(value));
// console.log(value);

//6-16
// let value = [1, 2, 4, 8, 16];
// function updateArray(value) {
//   //末尾の要素を削除
//   value.pop();
//   return value;
// }
// console.log(updateArray(value));
// console.log(value);

// //6-17
// function updateArray(value) {
//   //配列そのものを置き換え
//   value = [10, 20, 30];
//   return value;
// }
// console.log(updateArray(value));
// console.log(value);

//6-18
// {
//   var scope = "Hoge";
// }
// console.log(scope);

//6-19
// (function () {
//   var scope = "Hoge";
//   console.log(scope);
// }).call(this);
// console.log(scope);

// //6-20
// var scope = "Global Scope";
// function getValue() {
//   console.log(scope);
//   var scope = "Block Scope";
//   return scope;
// }
// console.log(getValue());
// console.log(scope);

//6-21
// let scope = "var global";
// console.log(scope);
// console.log(window.scope);

// //6-22
// window.scope = "var global";
// let scope = "let global";
// console.log(scope);
// console.log(window.scope);

// //6-27
// function showMessage(value) {
//   console.log(value);
// }
// showMessage();
// showMessage("山田");
// showMessage("山田、鈴木");

//6-28
// function showMessage(value) {
//   if (arguments.length !== 1) {
//     throw new Error(`引数の数が間違っています:${arguments.length}`);
//   }
//   console.log(value);
// }

// try {
//   showMessage("山田", "鈴木");
// } catch (e) {
//   console.log(e.message);
// }

// //6-29
// function getTriangleArea(base = 10, height = 5) {
//   return (base * height) / 2;
// }
// console.log(getTriangleArea());
// console.log(getTriangleArea(4));
// console.log(getTriangleArea(1, 2));

// //6-32
// function show(x, y = 1) {
//   console.log(`x=${x}`);
//   console.log(`y=${y}`);
// }
// show();
