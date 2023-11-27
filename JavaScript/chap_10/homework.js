const getRandomValue = (random) => {
  return Math.floor(Math.random() * random);
};
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

// button(id="btn")を押した時にやることを指示
let button = document.querySelector("#btn");
button.addEventListener("click", () => {
  //getOmikujiの結果を定数valueに代入
  const value = getOmikuji();
  console.log(value);
  //<p>におみくじの結果(定数value)を入れて表示させる
  const pEle = document.querySelector("#omikuji");
  pEle.textContent = value;

  //ストレージにデータを保存
  let storage = localStorage;

  const value2 = storage.getItem("omikujiResult");
  if (value2 !== null) {
    const value3 = value + "," + value2;
    storage.setItem("omikujiResult", value3);
    const pEle2 = document.querySelector("#omikujiStorage");
    pEle2.textContent = value3;
  } else {
    storage.setItem("omikujiResult", value);
    const pEle2 = document.querySelector("#omikujiStorage");
    pEle2.textContent = value;
  }
});

// //ストレージにデータを保存
// let storage = localStorage;
// storage.setItem("getOmikuji", value);
const omikujiValue = localStorage.getItem("omikujiResult");
// console.log(storage.getItem("getOmikuji"));

//storageの内容を画面に表示
const pEle2 = document.querySelector("#omikujiStorage");
pEle2.textContent = omikujiValue;
