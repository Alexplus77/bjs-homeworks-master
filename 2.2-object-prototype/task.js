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
  const persn =
    (new Date().getTime() / 1000 - new Date(birthday).getTime() / 1000) /
      31536000
  /4
  const age = Math.round(
    (new Date().getTime() / 1000 - new Date(birthday).getTime() / 1000) /
      31536000 + (persn/365)
  );
  console.log(persn);
  console.log(age);
  if (age >= 18) {
    return true;
  }
}
