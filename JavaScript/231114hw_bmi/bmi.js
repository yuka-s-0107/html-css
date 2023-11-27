const userA = {
  user: "太郎",
  height: 1.7,
  weight: 60,
};

const userB = {
  user: "二朗",
  height: 1.6,
  weight: 70,
};
const userC = {
  user: "三郎",
  height: 1.8,
  weight: 65,
};

const users = [userA, userB, userC];

for ({ height, weight } of users) {
  //分割代入↑
  const bmi = weight / (height * height);
  console.log(`BMIは、${bmi.toFixed(2)} です。`);
}

users.forEach((user) => {
  const { height, weight } = user;
  const bmi = weight / (height * height);
  console.log(`BMIは、${bmi.toFixed(2)} です。`);
});
