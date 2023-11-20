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
  const bmi = weight / (height * height);
  console.log(`BMIは、${bmi} です。`);
}
