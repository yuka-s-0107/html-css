// 以下、サンプルです。
// let button = document.getElementById("xxx");
// button.addEventListener("click", function () {
//   console.log("hello");
// });

const getRandomValue = (random) => {
  return Math.floor(Math.random() * random);
};

let button = document.getElementById("btn");
button.addEventListener("click", function () {
  const getOmikuji = () => {
    const result = getRandomValue(5);
    if (result === 0) {
      return "大吉";
    } else if (result === 1) {
      return "吉";
    } else if (result === 2) {
      return "小吉";
    } else if (result === 3) {
      return "凶";
    } else {
      return "大凶";
    }
  };
  console.log(getOmikuji());
});
