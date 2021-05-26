//! Задача №1

function calculateTotalMortgage(percent, contribution, amount, date) {
  "use strict";

  const percentNum = +percent;
  const contributionNum = Number(contribution);
  const amountNum = Number(amount);

  const P = percentNum / 100 / 12;
  let S = amountNum - contributionNum;
  let dateNow = new Date();
  let n =
    date.getMonth() -
    dateNow.getMonth() +
    12 * (date.getFullYear() - dateNow.getFullYear());

  let resultYear = S * (P + P / ((1 + P) ** n - 1)) * 12;

  let totalAmount = Math.floor(resultYear * 100) / 100;

  if (isNaN(percentNum)) {
    return `Параметр percent содержит неправильное значение ${percent} `;
  } else if (isNaN(contributionNum)) {
    return `Параметр contribution содержит неправильное значение ${contribution} `;
  } else if (isNaN(amountNum)) {
    return `Параметр amount содержит неправильное значение ${amount} `;
  } else {
    return totalAmount;
  }

  // код для задачи №1 писать здесь
}

function getGreeting(name) {
    
if (name.trim() !== ''){
    let nameNew = name
    return `Привет, мир! Меня зовут ${nameNew}`
} else {
    let nameNew = 'Аноним' 
    return `Привет, мир! Меня зовут ${nameNew}`
}
    
    
    
  // код для задачи №2 писать здесь
   //
}
