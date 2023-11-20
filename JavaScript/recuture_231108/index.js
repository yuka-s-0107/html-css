//足し算
const add = (val1, val2) => {
  val1 + val2;
  const sum = val1 + val2;
  return sum;
};
//const add = (val1, val2) => val1 + val2;

const addBtnEl = document.querySelector("#addBtn");
addBtnEl.addEventListener("click", () => {
  const inputEl1 = document.querySelector("#add1");
  const val1 = +inputEl1.value;

  const inputEl2 = document.querySelector("#add2");
  const val2 = +inputEl2.value;

  const sum = add(val1, val2);

  const resultEl = document.querySelector("#addResult");
  resultEl.textContent = sum;
});

//引き算
const sub = (val3, val4) => {
  val3 + val4;
  const dif = val3 - val4;
  return dif;
};

const subBtnEl = document.querySelector("#subBtn");
subBtnEl.addEventListener("click", () => {
  const inputEl3 = document.querySelector("#sub1");
  const val3 = +inputEl3.value;

  const inputEl4 = document.querySelector("#sub2");
  const val4 = +inputEl4.value;

  const dif = sub(val3, val4);

  const resultEl = document.querySelector("#subResult");
  resultEl.textContent = dif;
});

//かけ算
const mul = (val5, val6) => {
  val5 * val6;
  const pro = val5 * val6;
  return pro;
};
// console.log(mul(5, 2));

const mulBtnEl = document.querySelector("#mulBtn");
mulBtnEl.addEventListener("click", () => {
  const inputEl5 = document.querySelector("#mul1");
  const val5 = +inputEl5.value;

  const inputEl6 = document.querySelector("#mul2");
  const val6 = +inputEl6.value;

  const pro = mul(val5, val6);

  const resultEl = document.querySelector("#mulResult");
  resultEl.textContent = pro;
});

//わり算
const div = (val7, val8) => {
  val7 / val8;
  const quo = val7 / val8;
  return quo;
};

const divBtnEl = document.querySelector("#divBtn");
divBtnEl.addEventListener("click", () => {
  const inputEl7 = document.querySelector("#div1");
  const val7 = +inputEl7.value;

  const inputEl8 = document.querySelector("#div2");
  const val8 = +inputEl8.value;

  const quo = div(val7, val8);

  const resultEl = document.querySelector("#divResult");
  resultEl.textContent = quo;
});

const div1 = (val, val2) => {
  const quo = Math.floor(val / val2);
  return quo;
};
const div2 = (val, val2) => {
  const quo = val % val2;
  return quo;
};
// console.log(div1(3, 2));
// console.log(div2(3, 2));

const divBtnEl2 = document.querySelector("#divBtn2");
divBtnEl2.addEventListener("click", () => {
  const inputEl7 = document.querySelector("#div3");
  const val7 = +inputEl7.value;

  const inputEl8 = document.querySelector("#div4");
  const val8 = +inputEl8.value;

  const result1 = div1(val7, val8);
  const result2 = div2(val7, val8);

  const resultEl = document.querySelector("#divResult2");
  resultEl.textContent = `${result1} 余り ${result2}`;
  //テンプレート構文${}↑
});
