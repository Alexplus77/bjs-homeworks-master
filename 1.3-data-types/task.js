//! Задача №1
function parsDate(date){
  let dateNow = new Date();
  let nDate =
    date.getMonth() -
    dateNow.getMonth() +
    12 * (date.getFullYear() - dateNow.getFullYear());
    return nDate
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  "use strict";

  const percentNum = +percent;
  const contributionNum = Number(contribution);
  const amountNum = Number(amount);

  const P = percentNum / 100 / 12;
  let S = amountNum - contributionNum;
    let n = parsDate(date)
    
console.log(n)
  let resultYear = S * (P + P / (((1 + P) ** n ) - 1)) * 12;

  let totalAmount = Math.floor(resultYear * 100) / 100;

  if (isNaN(percentNum)) {
    return `Параметр "Процентная ставка" содержит неправильное значение ${percent} `;
  } else if (isNaN(contributionNum) || contributionNum<0) {
    return `Параметр contribution содержит неправильное значение ${contribution} `;
  } else if (isNaN(amountNum) || amountNum<0) {
    return `Параметр amount содержит неправильное значение ${amount} `;
  } else {
    return totalAmount;
  }

  // код для задачи №1 писать здесь
}
//! Задача №2
function getGreeting(name) {
  let messedge= 'Привет, мир! Меня зовут'

  if (Boolean(name) && name !==" ") {
   
    let greeting = `${messedge} ${name}.`;
    console.log(greeting)
    
    return greeting
  } else {
    let name = "Аноним";
    let greeting = `${messedge} ${name}.`;
    console.log(greeting)
    return greeting
  }
}
