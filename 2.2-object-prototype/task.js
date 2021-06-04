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
function checkBirthday(birthday) {
  const now = new Date().getTime() / 1000;
  const bd = new Date(birthday).getTime() / 1000;
  const diff = now - bd;
  const age = Math.round(diff / 31536000);
  if (age > 18) {
    return true;
  }
}
