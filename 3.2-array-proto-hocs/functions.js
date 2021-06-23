console.clear();
const weapons = [
  new Knife(),
  new Staff(),
  new Axe(),
  new StormStaff(),
  new LongBow(),
  new Bow(),
];
console.clear();
console.log(weapons.map((elem) => elem));
function getNames() {
  const arr = weapons.map((elem) => elem.name);
  return arr;
}

function getCountReliableWeapons(durability) {
  return  weapons.filter(elem=>elem>durability)
}
