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
    if (namber < 0) {
      this._state = 0;
    } else if (namber > 100) {
      this._state = 100;
    } else {
      this._state = namber;
    }
  }
  get state() {
    return this._state;
  }
}
class Magazine extends PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this.state = 100;
    this.type = "magazine";
  }
}
class Book extends PrintEditionItem {
  constructor(author, name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this.author = author;
    this.state = 100;
    this.type = "book";
  }
}

class NovelBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this.author = author;
    this.state = 100;
    this.type = "novel";
  }
}

class FantasticBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this.author = author;
    this.state = 100;
    this.type = "fantastic";
  }
}

class DetectiveBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this.author = author;
    this.state = 100;
    this.type = "detective";
  }
}

const printItem = new PrintEditionItem();
