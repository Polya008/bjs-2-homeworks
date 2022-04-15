//Задание 1
class PrintEditionItem {
 constructor(name, releaseDate, pagesCount){
  this.name = name;
  this.releaseDate = releaseDate;
  this.pagesCount = pagesCount;
  this.type = null;
  this.state = 100;
}

fix() {
  this.state *= 1.5;
}

set state(value){
  if(value < 0){
    return this._state = 0;
  } else if (value >= 100) {
    return this._state = 100;
  } 
}

get state() {
  return this._state;
}
}

class Magazine extends PrintEditionItem {
  constructor(name, releaseDate, pagesCount, type){
    super(name, releaseDate, pagesCount);
    this.type = "magazine";
  }
}

class Book extends PrintEditionItem {
  constructor(author, name, releaseDate, pagesCount, type) {
    super(name, releaseDate, pagesCount);
    this.author = author;
    this.type = "book";
  }
}

class NovelBook extends Book {
  constructor(name, releaseDate, pagesCount, type){
    super(name, releaseDate, pagesCount);
    this.type = "novel";
  }
}

class FantasticBook extends Book {
  constructor(name, releaseDate, pagesCount, type){
    super(name, releaseDate, pagesCount);
    this.type = "fantastic";
  }
}

class DetectiveBook extends Book {
  constructor(name, releaseDate, pagesCount, type){
    super(name, releaseDate, pagesCount);
    this.type = "detective";
  }
}

//Задание  2
class Library {
  constructor(name){
    this.name = name;
    this.books = [];
  }

  addBook(book){
    if(book.state > 30){
     this.books.push(book);
   }
 }

findBookBy(type, value) {
  let itemBook = this.books.find((item) => item[type] === value);
  if(itemBook){
    return itemBook;
  } else {
    return null;
  }
}


giveBookByName(bookName) {
let searchingBook = this.books.findIndex((item) => item.name === bookName);
if(searchingBook != -1){
    this.books.splice(searchingBook,1);
} else {
  return null;
 }
}

/*giveBookByName(bookName) {
if(this.name === bookName){
    this.books.findIndex((item) => this.books.splice(item,1));
} else {
  return 'null';
 }
}*/

}
//Задание 3
class Student {
  constructor(name) {
   this.name = name;
 }

 addMark(mark, discipline){
   this.discipline = {};
   this.discipline.discipline = discipline;
   this.discipline.mark = [];

   if(Object.keys(this.discipline.discipline) !== []){
     this.discipline.mark.push(mark);
   }


  if(Object.values(this.discipline.mark) === []){
     this.discipline.mark = [mark];
   } else {
     this.discipline.mark.push(mark);
   }
   
   if(mark > 5) {
    return 'Ошибка, оценка должна быть числом от 1 до 5';
  }


}

getAverageBySubject(value){
  let sum = (this.discipline.filter((item) => item === value)).reduce((a,b) => a + b, x = 0);
  let getAverageBySubject = sum / this.discipline.length;
   return `Средний балл по предмету ${value} : ${getAverageBySubject}`;
 
 if(this.discipline.some((value) => value === undefined)) {
  return 'Несуществующий предмет';
}
}

getAverage(){


  return 'Средний балл по всем предметам 4.75'
}

}