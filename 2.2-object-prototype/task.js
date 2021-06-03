//!Задача№1
String.prototype.isPalindrome = function () {
  let value = this.toLowerCase().replace(/\s+/g, "");

  let value2 = value
    .toLowerCase()
    .replace(/\s+/g, "")
    .split("")
    .reverse()
    .join("");

  if (value2 === value) {
    return true;
  } else {
    return false;
  }
};

function getAverageMark(marks) {
  // код для задачи №2 писать здесь
  // return averageMark
}

function checkBirthday(birthday) {
  // код для задачи №3 писать здесь
  // return verdict
}
