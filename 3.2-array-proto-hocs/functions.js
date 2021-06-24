//! Задача №1
console.clear();
const weapons = [
  new Knife(),
  new Staff(),
  new Axe(),
  new StormStaff(),
  new LongBow(),
  new Bow(),
];

console.log(weapons.map((elem) => elem));
function getNames() {
  const arr = weapons.map((elem) => elem.name);
  return arr;
}

function getCountReliableWeapons(durability) {
  return weapons.filter((elem) => elem.durability > durability).length;
}

function hasReliableWeapons(durability) {
  return weapons.some((elem) => elem.durability > durability);
}

function getReliableWeaponsNames(durability) {
  return weapons.reduce((acc, elem) => {
    acc=[]
    if (elem.durability > durability)
    {
      
      return acc.push(elem.name)
    };
   
  })
    // .filter((elem) => elem.durability > durability)
    // .map((elem) => elem.name);
}

function getTotalDamage() {

  
  return weapons.reduce((acc, elem) => acc + elem.attack, 0)

}
//! Функция со звездочкой
function getValuestCountToSumValues(arr, sum) {
  let sumNum = 0;
  let arrNum = [];
  arr.forEach((elem) => {
    sumNum = elem + sumNum;
    let d = sumNum - sum;

    if (sumNum === sum || d < elem) {
      arrNum.push(elem);
    } else {
      return arrNum.length;
    }
  });
  return arrNum.length;
}
console.log(getValuestCountToSumValues([1, 2, 3, 5, 2, 7, 3, 5, 2], 20));
