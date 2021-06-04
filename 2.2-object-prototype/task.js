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
  if (marks.length === 0) {
    return 0;
  }
  const roundedAverage = Math.round(
    marks.reduce((acc, elem) => acc + elem) / marks.length
  );

  return roundedAverage;
}

function checkBirthday(birthday) {
  // код для задачи №3 писать здесь
  // return verdict
}
