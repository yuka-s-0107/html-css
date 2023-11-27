//1. 引数の値までのランダム値を返す関数
const getRandomValue = (random) => {
  return Math.floor(Math.random() * random);
};
console.log(getRandomValue(10));
//randomは0-9までの10個

// //2.おみくじ結果を出力する関数
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

//3.2.をswitch文を用いて実装
const getOmikuji2 = () => {
  switch (getRandomValue(5)) {
    case 0:
      return "大吉";
    case 1:
      return "吉";
    case 2:
      return "小吉";
    case 3:
      return "凶";
    case 4:
      return "大凶";
  }
};
console.log(getOmikuji2());

//4.大吉が出るまで繰り返す関数
const printBest = () => {
  while (true) {
    const result = getOmikuji();
    console.log(result);
    if (result === "大吉") {
      break;
    }
  }
};
printBest();
