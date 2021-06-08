class PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    this.name=name;
    this.releaseDate=releaseDate;
    this.pagesCount=pagesCount;
    this.state=100;
    this.type=null
  }  
  fix(){
    state*1.5    
};

}

const editionItem = new PrintEditionItem();



class Person{
    constructor(firstname, lastname, phone){
this.firstname=firstname;
this.lastname=lastname;
this.phone=phone;
    }
}

const phonbook = [
    new Person ('Иван', 'Иванович', 999999),
    new Person ('Алексей', 'Ковалев', 877899877)
]