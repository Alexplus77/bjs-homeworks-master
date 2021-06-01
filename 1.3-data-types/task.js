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
  let resultYear = S * (P + P / (((1 + P) ** n ) - 1)) * n;

  let totalAmount = Math.round(resultYear * 100) / 100;
if ( n<0){
  return `Параметр "Срок ипотеки" содержит неправильное значение ${n}`
}
  else if (isNaN(percentNum) || percentNum<0) {
    return `Параметр "Процентная ставка" содержит неправильное значение ${percent} `;
  } else if (isNaN(contributionNum) || contributionNum<0) {
    return `Параметр "Первоначальный взнос" содержит неправильное значение ${contribution} `;
  } else if (isNaN(amountNum) || amountNum<0) {
    return `Параметр "Общая стоимость" содержит неправильное значение ${amount} `;
  } else if( totalAmount<0) {
    return totalAmount = 0;
  } else {
    return totalAmount
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
