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
//! Задания по классам

console.log("Задания по классам");
// class PhoneBook {
//   constructor() {
//     this.phoneBook = {}; // сам придумай архитектуру - в чем хранить контакты, чтобы легко их находить {} || [] ?;

//   }

//   addContact(name, phone) {
//     const users = Object.keys(this.phoneBook);
//     for(const user of users){
//         if(user===name || this.phoneBook[user]===phone){
//             console.log(`Контакт с именем ${name} и телефоном ${phone} уже существует.`)
//     return
//     }
//     }
//     this.phoneBook[name] = phone;
//     console.log(`Добавили контакты с именем ${name} и телефоном ${phone}`);
//     return this.phoneBook;
//   }

//   editContact(name, phone, nameNew) {
//     if (isNaN(phone)) {
//       console.log(`Телефон контакта по имени ${name} не найден`);
//       return this.phoneBook;
//     }

//     const users = Object.keys(this.phoneBook);

//     for (const user of users) {
//       if (user !== nameNew && this.phoneBook[user] === phone) {
//         console.log(`Меняем имя ${user} на имя ${nameNew}`);
//         delete this.phoneBook[user];
//         this.phoneBook[nameNew] = phone;

//         return this.phoneBook;
//       }
//     }

//     if (this.phoneBook[name] !== phone) {
//       this.phoneBook[name] = phone;
//       console.log(`Поменяли телефон у контакта с именем ${name}`);

//       return this.phoneBook;
//     }
//   }

//   deleteContact(name) {
//     const users = Object.keys(this.phoneBook);

//     for (const user of users) {
//       if (user === name ) {
//         console.log(`Удаляем контакт с именем ${name}`);
//         delete this.phoneBook[user];
//                 return this.phoneBook;
//       } else{
//           console.log(`Контакт с именем ${name} не существует`)
//           return this.phoneBook
//       }
//     }
//   }

//   findContact(name) {
//     const users = Object.entries(this.phoneBook);

//     for (const user of users) {
//        if(user[0] !== name )  { console.log(`Контакт с именем ${name} не существует`)
//     //return `Контакт с именем ${name} не существует`
//     }    else{

//         console.log(`Найден контакт с именем ${name} и телефоном ${user[1]}`);
//            return `${name}:  ${user[1]}`
//     }
//     }

//   }
// }

// const log = new PhoneBook();

// /*
//  * Мы разрабатываем телефонный справочник со следующими методами:
//  *
//  * 1. Добавить контакт - метод принимает имя и телефон - добавляет контакт в тел. книгу (если один из параметров не передан - должна быть ошибка - передайте параметр ${phone}
//  * 2. Удалить контакт - удаляет контакт по имени или по номеру телефона
//  * 3. Отредактировать контакт - принимает имя, телефон редактирует либо имя, или телефон или сразу два параметра
//  * 4. Поиск - можно искать по номеру тел. или по имени - результат - объект с инфо о пользователе или пользователь не найден (если такого нет в тел. книге)
//  *
//  *
//  * Предусмотреть методы валидации:
//  * 1. Нельзя добавить контакт, который уже есть (выдать ошибку пользователь с таким именем уже сущестует ||  пользователь с таким телефоном уже есть в тел. книге
//  * 2. Нельзя удалить контакт, которого нет - выводим сообщение - Пользователь не найден.
//  * 3. Неполный поиск, к примеру у нас есть пять польователей, тел. которых начинаются одинаково (8905) - при таком запросе, поиск должен выдать всех этих пользователей
//  * 4. Неполный поиск по имени к примеру при поиске Ан - Мы должны получить результаты Андрей, Анатолий, Анна, и всех, польователей, у которых есть совпадения - но именно сначала!
//  *
//  * Твоя задача - придумать удобную структуру, самому продумать как будут хранится номера, пользователи, будут ли это объекты, или массивы - архитектура проекта на тебе!
//  * В примере я предложил хранить
//  *
//  * */

// // Примеры использования

// log.addContact("Alexey", "+79052430565"); // Добавляем контакт
// log.addContact("Pavel", "+790524358885"); // Добавляем контакт
// log.addContact("Alexey", "+79052430565"); // Контакт уже сущестует
// log.addContact("German", "+79052435877"); // Добавляем контакт
// log.addContact("Andrey", "+79052432545"); // Добавляем контакт
// console.log(log.addContact("Kseniya", "+79052439662")); // Добавляем контакт

// console.log(log.editContact("Alexey", "+79052430565", "Alex-Dentist")); // Меняет имя
// log.editContact("John", "Paul"); // Контакт не найден
// console.log(log.editContact("German", "+79052435855")); // Отредактировали телефон

// console.log(log.findContact("German")); // телефон должен быть отредактирован

// console.log(log.deleteContact("Pavel")); // удаляет пользователя
// console.log(log.findContact("Pavel")); // Контакт не найден - удалили его

// log.deleteContact("Robert"); // Контакт не найден

// log.findContact("Alexey"); // {'name': Alexy, phone: '+79052430565'}
// log.findContact(7905); // => все пользователи, у которых начинается телефон с этих цифр
// log.findContact("a"); // => Alexey, Andrey

//!Вариант 2

class PhoneBook {
  constructor() {
    this.phoneBook = [];
  }
  validation(name) {
    return this.phoneBook.map((elem) => elem.name).includes(name);
  }
  addContact(name, phone) {
    if (this.validation(name)) {
      console.log(`Контакт с именем ${name} уже существует`);
      return `Контакт с именем ${name} уже существует`;
    }
    const users = {
      name: name,
      phone: phone,
    };
    this.phoneBook.push(users);
  }

  editContact(name, phone, nameNew) {
    for (const user of this.phoneBook) {
      if (user.name === name && user.phone !== phone && nameNew === undefined) {
        user.phone = phone;
        console.log(`Поменяли телефон ${name}`);

        return this.phoneBook;
      }
      if (user.name === name || user.phone === phone) {
        user.name = nameNew;
        console.log(
          `Поменяли контактактные данные пользователя с именем ${name} `
        );

        return this.phoneBook;
      }
    }
  }

  deleteContact(name) {
    const index = this.phoneBook.findIndex((elem) => elem.name === name);
    if (index !== -1) {
      this.phoneBook.splice(index, 1);
      console.log(this.phoneBook);

      return `Контакт с именем ${name} удален`;
    } else {
      return `Контактa с именем ${name} нет`;
    }
  }
  //! Вариант 1 метода поиска

  getIsFound(search, contact) {
    for (const seachParam in contact) {
      if (contact[seachParam].toLowerCase() === search) {
        return true;
      } else if (
        contact[seachParam].toLowerCase().startsWith(search.toLowerCase())
      ) {
        return true;
      }
    }
    return false;
  }
  findContact(search) {
    const findContact = this.phoneBook.filter((contact) =>
      this.getIsFound(search, contact)
    );

    if (findContact.length) {
      return findContact;
    } else {
      return `Контакт ${search} не найден.`;
    }
  }

  //! Вариант 2 метода
  // findContact(name) {
  //   if (!name) {
  //     console.log(`Укажите имя или телефон`);
  //     return `Укажите имя или телефон`;
  //   }
  //   const nameLength = name.split("").length;
  //   const findArr = [];

  //   for (const user of this.phoneBook) {
  //     const findObj = {
  //       name: user.name,
  //       phone: user.phone,
  //     };
  //     if (
  //       user.name.toLowerCase().slice(0, nameLength) === name.toLowerCase() ||
  //       (user.phone.slice(0, nameLength) === name && Number(name))
  //     ) {
  //       findArr.push(findObj);
  //     }
  //   }
  //   if (findArr.length) {
  //     return findArr;
  //   } else {
  //     return `Контакт с именем ${name} не найден.`
  //   }
  // }
}

const log = new PhoneBook();

/*
 * Мы разрабатываем телефонный справочник со следующими методами:
 *
 * 1. Добавить контакт - метод принимает имя и телефон - добавляет контакт в тел. книгу (если один из параметров не передан - должна быть ошибка - передайте параметр ${phone}
 * 2. Удалить контакт - удаляет контакт по имени или по номеру телефона
 * 3. Отредактировать контакт - принимает имя, телефон редактирует либо имя, или телефон или сразу два параметра
 * 4. Поиск - можно искать по номеру тел. или по имени - результат - объект с инфо о пользователе или пользователь не найден (если такого нет в тел. книге)
 *
 *
 * Предусмотреть методы валидации:
 * 1. Нельзя добавить контакт, который уже есть (выдать ошибку пользователь с таким именем уже сущестует ||  пользователь с таким телефоном уже есть в тел. книге
 * 2. Нельзя удалить контакт, которого нет - выводим сообщение - Пользователь не найден.
 * 3. Неполный поиск, к примеру у нас есть пять польователей, тел. которых начинаются одинаково (8905) - при таком запросе, поиск должен выдать всех этих пользователей
 * 4. Неполный поиск по имени к примеру при поиске Ан - Мы должны получить результаты Андрей, Анатолий, Анна, и всех, польователей, у которых есть совпадения - но именно сначала!
 *
 * Твоя задача - придумать удобную структуру, самому продумать как будут хранится номера, пользователи, будут ли это объекты, или массивы - архитектура проекта на тебе!
 * В примере я предложил хранить
 *
 * */

// Примеры использования

log.addContact("Alexey", "+79052430565"); // Добавляем контакт
log.addContact("Pavel", "+790524358885"); // Добавляем контакт
log.addContact("Alexey", "+79052430565"); // Контакт уже сущестует
log.addContact("German", "+79052435877"); // Добавляем контакт
log.addContact("Andrey", "+79052432545"); // Добавляем контакт
log.addContact("Kseniya", "+79052439662"); // Добавляем контакт

log.editContact("Alexey", "+79052430565", "Alex-Dentist"); // Меняет имя
log.editContact("John", "Paul"); // Контакт не найден
log.editContact("German", "+79052435855"); // Отредактировали телефон

log.findContact("+79052430"); // телефон должен быть отредактирован

console.log(111, log.deleteContact("Pavel")); // удаляет пользователя
log.findContact("Pavel"); // Контакт не найден - удалили его

// log.deleteContact("Robert"); // Контакт не найден

// log.findContact("Alexey"); // {'name': Alexy, phone: '+79052430565'}
console.log(log.findContact("+790524396")); // => все пользователи, у которых начинается телефон с этих цифр
console.log(log.findContact("a")); // => Alexey, Andrey

//!Задача на поиск наибольшего числа в массиве

console.log("Задача на поиск наибольшего числа в массиве");

const arr = [
  111, 1, 2, 3, 4, 99999, 0, -999, 5, 396, 2, 4, 44, 55, 3499999, 21,
];
let result = 0;
let i = 0;

function f1() {
  for (const num of arr) {
    i + 1;
    if (num > arr[i]) {
      result = num;
    }
  }
  return result;
}
console.log(f1());
