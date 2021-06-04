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

function getAverageMark(marks) {
  // код для задачи №2 писать здесь
  // return averageMark
}

function checkBirthday(birthday) {
  // код для задачи №3 писать здесь
  // return verdict
}
