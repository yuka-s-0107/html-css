//1. 引数の値までのランダム値を返す関数
const getRandomValue = (random) => {
  return random;
};
console.log(getRandomValue(Math.floor(Math.random() * 10)));
//randomは0-10までの11個

// //2.おみくじ結果を出力する関数
const getOmikuji = () => {
  if (getRandomValue(Math.floor(Math.random() * 5)) === 0) {
    return "大吉";
  } else if (getRandomValue(Math.floor(Math.random() * 5)) === 1) {
    return "吉";
  } else if (getRandomValue(Math.floor(Math.random() * 5)) === 2) {
    return "小吉";
  } else if (getRandomValue(Math.floor(Math.random() * 5)) === 3) {
    return "凶";
  } else {
    return "大凶";
  }
};
console.log(getOmikuji(getRandomValue));

//3.2.をswitch文を用いて実装
const getOmikuji2 = () => {
  switch (getRandomValue(Math.floor(Math.random() * 5))) {
    case 0:
      console.log("大吉");
      break;
    case 1:
      console.log("吉");
      break;
    case 2:
      console.log("小吉");
      break;
    case 3:
      console.log("凶");
      break;
    case 4:
      console.log("大凶");
      break;
  }
};
console.log(getOmikuji2());

//4.大吉が出るまで繰り返す関数
const printBest = () => {
  for (let i = Math.floor(Math.random() * 5); i >= 0; i--) {
    if (i === 0) {
      console.log("大吉");
    }
  }
};
console.log(printBest());
