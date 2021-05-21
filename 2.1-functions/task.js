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


  getAverageMark(data2);
}

function getAverageMark(data2) {
  const dataNew = {
    algebra:
      data2.algebra.reduce((acc, elem) => acc + elem) / data2.algebra.length,
    geometry:
      data2.geometry.reduce((acc, elem) => acc + elem) / data2.geometry.length,
    russan:
      data2.russan.reduce((acc, elem) => acc + elem) / data2.russan.length,
    physycks:
      data2.physycks.reduce((acc, elem) => acc + elem) / data2.physycks.length,
    music: data2.music.reduce((acc, elem) => acc + elem) / data2.music.length,
    englisn:
      data2.englisn.reduce((acc, elem) => acc + elem) / data2.englisn.length,
    poetry:
      data2.poetry.reduce((acc, elem) => acc + elem) / data2.poetry.length,
    chemystry:
      data2.chemystry.reduce((acc, elem) => acc + elem) /
      data2.chemystry.length,
    franch:
      data2.franch.reduce((acc, elem) => acc + elem) / data2.franch.length,
    geografy:
      data2.geografy.reduce((acc, elem) => acc + elem) / data2.geografy.length,
  };

  //console.log(dataNew);
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

function getAverageScore2(data){
    const arrNew={}
for (let[key, value] of Object.entries(data)){
return arr= [key, value.reduce((acc, elem)=>acc+elem/value.length)]

}

console.log(arr)
}

function getAverageMark2(data){
const arr=getAverageScore2(data)

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