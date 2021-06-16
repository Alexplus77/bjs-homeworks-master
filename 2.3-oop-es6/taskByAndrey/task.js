//! Задача №1
console.log("Задача №1");
const str =
  "abbcccddddeeeeefffffffffffggggggggggghhhhhhhhhhijkabcdfabcdfalexeyisaprogrammer";

const obj = {};

function objectAdd() {
  const letters = str.split("");

  for (const letter of letters) {
    obj[letter] = obj[letter] || 0;
    obj[letter]++;
  }
  console.log(obj);
}

objectAdd();
