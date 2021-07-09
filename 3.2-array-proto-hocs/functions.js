//! Задача №1
console.clear();
// const weapons = [
//   new Knife(),
//   new Staff(),
//   new Axe(),
//   new StormStaff(),
//   new LongBow(),
//   new Bow(),
// ];

// console.log(weapons.map((elem) => elem));
// function getNames() {
//   const arr = weapons.map((elem) => elem.name);
//   return arr;
// }

// function getCountReliableWeapons(durability) {
//   return weapons.filter((elem) => elem.durability > durability).length;
// }

// function hasReliableWeapons(durability) {
//   return weapons.some((elem) => elem.durability > durability);
// }

// function getReliableWeaponsNames(durability) {
//   return weapons.reduce((acc, elem) => {
//     if (elem.durability > durability) {
//       acc.push(elem.name);
//     }
//     return acc;
//   }, []);
// }

// function getTotalDamage() {
//   return weapons.reduce((acc, elem) => acc + elem.attack, 0);
// }
// //! Функция со звездочкой
// function getValuestCountToSumValues(arr, sum) {
//   let sumNum = 0;
//   let arrNum = [];
//   arr.forEach((elem) => {
//     sumNum = elem + sumNum;
//     let d = sumNum - sum;

//     if (sumNum === sum || d < elem) {
//       arrNum.push(elem);
//     } else {
//       return arrNum.length;
//     }
//   });
//   return arrNum.length;
// }
// console.log(getValuestCountToSumValues([1, 2, 3, 5, 2, 7, 3, 5, 2], 20));

//! Задача 2

function sleep(milliseconds) {
  let e = new Date().getTime() + milliseconds;
  while (new Date().getTime() <= e) {}
}

function sum(...args) {
  // Замедление на половину секунды.
  sleep(100); // Можно использовать другое значение замедления.
  return args.reduce((sum, arg) => {
    return (sum += +arg);
  }, 0);
}
const compareArrays = (arr1, arr2) => arr1.every((n, i) => n === arr2[i]);
// function compareArrays(arr1, arr2) {
//   if (
//     arr1.reduce((acc, elem) => acc + elem, 0) ===
//     arr2.reduce((acc, elem) => acc + elem, 0)
//   ) {
//     return true;
//   } else if (!arr1.length || !arr2.length) {
//     return true;
//   }
// }

// compareArrays([8, 9], [6]); // false, разные значения
// compareArrays([8, 9, 5, 4], [8, 9, 5, 4, 8, 3, 5]); // false, разные значения
// compareArrays([9, 2, 4, 8, 2], [9, 2, 4]); // false, разные значения
// compareArrays([1, 2, 3], [2, 3, 1]); // false, разные индексы, хотя и одинаковые значения
// compareArrays([8, 1, 2], [8, 1, 2]); // true

function memorize(sum, limit) {
  const memory = [];

  return function (...args) {
    dVal = sum(...args);

    for (elem of memory) {
      arr1 = elem.args
      arr2 = args
      if (elem.args === args) {
        return elem.result;
      }
    }
    memory.push({
      args,
      result: args.reduce((elem, acc) => elem + acc),
    });    
    return dVal;
  };
}
const mSum = memorize(sum, 4);
sum(3, 4);
console.log(sum(3, 4)); // 7
mSum(3, 4);
mSum(1, 3);
mSum(3, 4);
console.log(mSum(3, 4, 9));
console.log(mSum(3, 4));
