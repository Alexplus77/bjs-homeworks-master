//! Задача №1
function parsDate(date) {
  let dateNow = new Date();
  let nDate =
    date.getMonth() -
    dateNow.getMonth() +
    12 * (date.getFullYear() - dateNow.getFullYear());
  return nDate;
}
function calculate(percentNum, contributionNum, amountNum, date){
  const arr ={  percentNum:"Процентная ставка",
    contributionNum:"Первоначальный взнос",
  amountNum:"Общая стоимость",
    date:"Срок ипотеки"}
  
  
  console.log(contributionNum)
  
    const P = percentNum / 100 / 12;
    let S = amountNum - contributionNum;
    let n = parsDate(date);
  
    let resultYear = S * (P + P / ((1 + P) ** n - 1)) * n;
  
    let totalAmount = Math.round(resultYear * 100) / 100;
  
    function validateParam (param){ 
      console.log(param)
      return isNaN(param) || param <0 } 
  
  
    for ( const param of arguments){
     
  if (validateParam(param)){
    
    for(let [key, value] of Object.entries(arr))
    {
      return `Параметр "${arr[key]}" содержит неправильное значение ${param}`}
  } else { return totalAmount}
    }
   
  }


function calculateTotalMortgage(percent, contribution, amount, date) {
  "use strict";
  
  const percentNum = Number(percent);
  const contributionNum = Number(contribution);
  const amountNum = Number(amount);

  return calculate(percentNum, contributionNum, amountNum, date)

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
