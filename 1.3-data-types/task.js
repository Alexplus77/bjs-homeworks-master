//! Задача №1
const parsDate = (date) => {
  let dateNow = new Date();
  let nDate =
    date.getMonth() -
    dateNow.getMonth() +
    12 * (date.getFullYear() - dateNow.getFullYear());
  if (nDate > 0) {
    return nDate;
  }
};

function calculateTotalMortgage(percent, contribution, amount, date) {
  "use strict";

  const percentNum = Number(percent);
  const contributionNum = Number(contribution);
  const amountNum = Number(amount);

  const arr = [
    "Процентная ставка",
    "Первоначальный взнос",
    "Общая стоимость",
    "Срок ипотеки",
  ];

  const P = percentNum / 100 / 12;
  let S = amountNum - contributionNum;
  let n = parsDate(date);
  const args = [percent, contribution, amount, n];

  for (let i = 0; i < args.length; i++) {
    let value = args[i];
    if (value === undefined) {
      value = date.toLocaleString();
    }
    if (validateParam(value)) {
      return `Параметр "${arr[i]}" содержит неправильное значение ${value}`;
    }
  }

  function validateParam(value) {
    return isNaN(value) || value < 0;
  }

  let resultYear = S * (P + P / ((1 + P) ** n - 1)) * n;

  let totalAmount = Math.round(resultYear * 100) / 100;
  if (totalAmount > 0) {
    return totalAmount;
  } else {
    totalAmount = 0;
    return totalAmount;
  }
}

//! Задача №2
function getGreeting(name) {
  let messedge = "Привет, мир! Меня зовут";

  if (Boolean(name) && name !== " ") {
    let greeting = `${messedge} ${name}.`;
    console.log(greeting);

    return greeting;
  } else {
    let name = "Аноним";
    let greeting = `${messedge} ${name}.`;
    console.log(greeting);
    return greeting;
  }
}
