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
//! Задание №2
console.log("Задание №2");

const data = [
  {
    country: "Россия",

    city: "Москва",
  },

  {
    country: "Беларусь",

    city: "Минск",
  },

  {
    country: "Россия",

    city: "Питер",
  },

  {
    country: "Россия",

    city: "Владивосток",
  },

  {
    country: "Украина",

    city: "Львов",
  },

  {
    country: "Беларусь",

    city: "Могилев",
  },

  {
    country: "Украина",

    city: "Киев",
  },

  {
    country: "Россия",

    city: "Владикавказ",
  },

  {
    country: "Беларусь",

    city: "Брест",
  },

  {
    country: "Россия",

    city: "Калининград",
  },
];

const townOfContry = {};
for (const obj of data) {
  const country = obj.country;
  const city = obj.city;
  townOfContry[country] = townOfContry[country] || [];
  townOfContry[country].push(city);
  }
console.log(townOfContry);
