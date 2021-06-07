//!Задача№1
String.prototype.isPalindrome = function () {
  let value = this.toLowerCase().replace(/\s+/g, "");

  let value2 = value
    .toLowerCase()
    .replace(/\s+/g, "")
    .split("")
    .reverse()
    .join("");

  return value2 === value;
};
//! Задача 2
function getAverageMark(marks) {
  if (!marks.length) {
    return 0;
  }
  const roundedAverage = Math.round(
    marks.reduce((acc, elem) => acc + elem) / marks.length
  );

  return roundedAverage;
}
//! Задача 3

//! Задача 3 вариант2
function checkBirthday(birthday) {
  const person = new Date() - Date.parse(birthday);

  const age = Math.floor(person / 1000 / 60 / 60 / 24) / 365.25;
  
  if (age >= 18) {
    return true;
  }else{return false}
}
