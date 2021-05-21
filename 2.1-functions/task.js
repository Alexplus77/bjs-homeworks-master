//! Задача №1

function getSolutions(a, b, c) {
  const d = b * b - 4 * a * c;
  if (d < 0) {
    return {
      d: d,
      root: [],
    };
  } else if (d === 0) {
    const x1 = -b / (2 * a);
    return {
      d: d,
      root: [x1],
    };
  } else if (d > 0) {
    const x1 = (-b + Math.sqrt(d)) / (2 * a);
    const x2 = (-b - Math.sqrt(d)) / (2 * a);
    return {
      d: d,
      root: [x1, x2],
    };
  }
}

function showSolutionsMessage(a, b, c) {
  const result = getSolutions(a, b, c);
  const x1 = result.root[0];
  const x2 = result.root[1];
  console.log(`Вычисляем корни квадратного уравнения ${a}x² + ${b}x + ${c}`);
  console.log(`Значение дискриминанта: ${result.d}`);
  if (x1 === undefined) {
    console.log("Уравнение не имеет вещественных корней");
  } else if (x2 === undefined) {
    console.log(`Уравнение имеет один корень X₁ = ${x1}`);
  } else if (x2 !== undefined) {
    console.log(`Уравнение имеет два корня. X₁ = ${x1}, X₂ = ${x2}`);
  }
}

showSolutionsMessage(1, 2, 3);

//! Задача №2 вариант 1
const dataN = {
  algebra: [2, 5, 3, 4, 3],
  geometry: [4, 5, 3, 3, 2, 5, 5],
  russan: [3, 3, 5, 4],
  physycks: [5, 4, 3, 5, 2],
  music: [3, 4, 5, 3],
  englisn: [4, 5, 3, 4, 4],
  poetry: [5, 4, 4, 4, 3, 3, 5, 5],
  chemystry: [3, 4, 2],
  franch: [4, 5, 2, 3],
  geografy: [4, 5, 4, 3],
};

function getAverageScore(data2) {
  //return obj[data2]
}

function getAverageMark(data2) {
  const arr4 = getAverageScore(data2);
  //console.log(arr4);
}

getAverageScore({
  algebra: [2, 5, 3, 4, 3],
  geometry: [4, 5, 3, 3, 2, 5, 5],
  russan: [3, 3, 5, 4],
  physycks: [5, 4, 3, 5, 2],
  music: [3, 4, 5, 3],
  englisn: [4, 5, 3, 4, 4],
  poetry: [5, 4, 4, 4, 3, 3, 5, 5],
  chemystry: [3, 4, 2],
  franch: [4, 5, 2, 3],
  geografy: [4, 5, 4, 3],
});

//! вариант 2

function getAverageScore2(data) {
  const newArr = {};
  for (let [key, value] of Object.entries(data)) {
    const arr = [key, [value.reduce((acc, elem) => acc + elem / value.length)]];

    const arr2 = value.reduce((acc, elem) => acc + elem / value.length);
  }
  //console.log(newArr)
}

function getAverageMark2(data) {
  const arr = getAverageScore2(data);
}

getAverageScore2({
  algebra: [2, 5, 3, 4, 3],
  geometry: [4, 5, 3, 3, 2, 5, 5],
  russan: [3, 3, 5, 4],
  physycks: [5, 4, 3, 5, 2],
  music: [3, 4, 5, 3],
  englisn: [4, 5, 3, 4, 4],
  poetry: [5, 4, 4, 4, 3, 3, 5, 5],
  chemystry: [3, 4, 2],
  franch: [4, 5, 2, 3],
  geografy: [4, 5, 4, 3],
});

const array = {
  algebra: [2, 5, 3, 4, 3],
  geometry: [4, 5, 3, 3, 2, 5, 5],
  russan: [3, 3, 5, 4],
  physycks: [5, 4, 3, 5, 2],
  music: [3, 4, 5, 3],
  englisn: [4, 5, 3, 4, 4],
  poetry: [5, 4, 4, 4, 3, 3, 5, 5],
  chemystry: [3, 4, 2],
  franch: [4, 5, 2, 3],
  geografy: [4, 5, 4, 3],
};

const newArray = [];
const obj = { newArray };

for (let i in array) {
  newArray[i] = array[i].reduce((acc, elem) => acc + elem) / array[i].length;
}
newArray.forEach((o, i) => {
  obj[o] = o;
});

console.log(obj);

//! Новый





const grades = [5, 5, 3, 4, 3, 5]; // 4.166666666666667

function getAverageMark(gradesArray) {
  return grades.reduce((acc, elem) => acc + elem) / grades.length;
}

function getAverageScore(data) {
  const result = {};
  const numberOfSubjects = Object.entries(data).length;
  let average = 0;
  for (let [key, value] of Object.entries(data)) {
    result[key] = getAverageMark(value);
    average += getAverageMark(value);
  }

  result["average"] = average / numberOfSubjects;

  return result;
}
getAverageScore(data);
