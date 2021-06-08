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

  set state(namber) {
      const nam= Number(namber)
      if (isNaN(nam) ){ console.log('Вы ввели не число')}
    if (nam < 0) {
      this._state = 0;
    } else if (nam > 100) {
      this._state = 100;
    } else {
      this._state = nam;
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
magazine.state = 30; // починка журнала 30 станиц
console.log(printItem);
console.log(magazine);
console.log(book);
console.log(novel);
console.log(fantastic);
console.log(detective);
