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

magazine.state = 1;
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
    for (const book of this.books) {
      //console.log(book[type])
      if (book[type] === value) {
        return book;
      }
    }
    return null;
  }

  giveBookByName(bookName) {
    for (const book of this.books) {
      if (book.name === bookName) {
        const index = this.books.findIndex((b) => b.name === bookName);
        return this.books.splice(index, 1)[0];
      }
    }
    return null;
  }
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
//console.log(library.findBookBy("name", "Мурзилка")); //"Мурзилка"
//console.log(library.findBookBy("name", "Типовой школьный журнал"));
//console.log(library.findBookBy("releaseDate", 2019));
//library.findBookBy("releaseDate", 2019);
//console.log(firstBook)
//console.log(library.giveBookByName("Машина времени"));
//console.log("Количество книг до выдачи: " + library.books.length); //Количество книг до выдачи: 4
//console.log(library.giveBookByName("Типовой школьный журнал"));
//console.log("Количество книг после выдачи: " + library.books.length); //Количество книг после выдачи: 3

//! Задача №3

class StudentLog {
  constructor(name) {
    this.name = name;

    this.subjectAll = [];
  }
  getName() {
    return this.name;
  }
  addGrade(grade, subject) {
    
    const subjectGrade = { subject: subject, grade: [] };
    this.subjectAll.push(subjectGrade);
    const index = this.subjectAll.findIndex((s) => s.subject === subject);
    
    for (const subj of this.subjectAll) {      
        if(this.subjectAll[index].subject===subject){
        this.subjectAll[index].grade.push(grade)
      
        return this.subjectAll[index].grade.length}       
      
    }
  }
}

const log = new StudentLog("Олег Никифоров");
console.log(log.getName()); // Олег Никифоров

