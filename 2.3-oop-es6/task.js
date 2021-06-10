//! Задача №1
class PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this.state = 100;
    this.type = null;
  }

  fix() {
    this.state = this.state * 1.5;
    return this.state;
  }

  set state(number) {
    if (isNaN(Number(number))) {
      console.log("Вы ввели не число");
    } // По условию задачи number должно быть числом
    if (number < 0) {
      this._state = 0;
    } else if (number > 100) {
      this._state = 100;
    } else {
      this._state = number;
    }
  }
  get state() {
    return this._state;
  }
}
class Magazine extends PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.type = "magazine";
  }
}
class Book extends PrintEditionItem {
  constructor(author, name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.author = author;
    this.type = "book";
  }
}

class NovelBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = "novel";
  }
}

class FantasticBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = "fantastic";
  }
}

class DetectiveBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = "detective";
  }
}

const printItem = new PrintEditionItem("Типовой школьный журнал", 2019, 102);
const magazine = new Magazine("Forbes", 2020, 180);
const book = new Book("А. Сапковский", "Меч Предназначения", 1992, 384);
const novel = new NovelBook("А. Сапковский", "Меч Предназначения", 1992, 384);
const fantastic = new FantasticBook(
  "Джон Толкин",
  "Властелин колец",
  1954,
  2093
);
const detective = new DetectiveBook(
  "Агата Кристи",
  "Десять негритят",
  2019,
  256
);

magazine.state = 10;
//console.log(magazine.state)//10  новые журналы или испорченные
magazine.fix();
//console.log(magazine.state)//15 можно подклеить
//console.log(printItem);
//console.log(magazine);
//console.log(book);
//console.log(novel);
//console.log(fantastic);
//console.log(detective);

//! Задача №2

class Library extends PrintEditionItem {
  constructor(name) {
    super();
    this.name = name;
    this.books = [];
  }
  addBook(book) {
    if (this.state > 30) {
      this.books.push(book);
    }
  }

  findBookBy(type, value) {
    this.type = type;
    this.value = value;
    this.arr = [this.type, this.value]; // Определяем в массив ключ и значение из аргументов метода
    // Перебераем массив библиотеки
    this.books.forEach((element) => {
      this.booksArr = Object.entries(element); // Переводим в массивы ключ и значение каждой книги в библиотеке.

      // Перебераем массив booksArr и проверяем содерит ли массив bookArr, ключ и значение массива arr
      for (let i = 0; i < this.booksArr.length; i++) {
        if (this.booksArr[i].every((o) => this.arr.includes(o))) {
          console.log(element);// ?Здесь находит книгу в библиотеке
          
          return element;//?Здесь undefined
        }
      }
    });
  }

  giveBookByName(bookName) {}
}

const library = new Library("Библиотека имени Ленина");
library.addBook(printItem);
library.addBook(
  new DetectiveBook(
    "Артур Конан Дойл",
    "Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе",
    2019,
    1008
  )
);
library.addBook(
  new FantasticBook(
    "Аркадий и Борис Стругацкие",
    "Пикник на обочине",
    1972,
    168
  )
);
library.addBook(new NovelBook("Герберт Уэллс", "Машина времени", 1895, 138));
library.addBook(new Magazine("Мурзилка", 1924, 60));
//library.findBookBy("releaseDate", 2019);
//library.findBookBy("name", "Мурзилка"); //"Мурзилка"
//console.log(library.findBookBy("name", "Властелин колец")); //null
console.log(library.findBookBy("releaseDate", 2019)); //"Мурзилка"
//console.log(firstBook)
