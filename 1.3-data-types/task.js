//! Задача №1
function parsDate(date) {
  let dateNow = new Date();
  let nDate =
    date.getMonth() -
    dateNow.getMonth() +
    12 * (date.getFullYear() - dateNow.getFullYear());
  return nDate;
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  "use strict";

  const percentNum = Number(percent);
  const contributionNum = Number(contribution);
  const amountNum = Number(amount);

  const P = percentNum / 100 / 12;
  let S = amountNum - contributionNum;
  let n = parsDate(date);

  let resultYear = S * (P + P / ((1 + P) ** n - 1)) * n;

  let totalAmount = Math.round(resultYear * 100) / 100;

  let validate = val(percentNum, contributionNum, amountNum);
  //console.log(validate);

  if (validate === false) {
    return validate;
  } else {
    return totalAmount;
  }
}

function val(percentNum, contributionNum, amountNum) {
  let a = arguments
  let params 
  for (  params of a) {
    
   if(isNaN(params) || params<0){
    
    return false
    
   }
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
