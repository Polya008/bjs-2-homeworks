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
  } else {
    return this._state = value;
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
   return this.books.splice(searchingBook,1)[0];
} else {
  return null;
 }
}

}
//Задание 3
class Student {
  constructor(name) {
   this.name = name;
   this.marks = {};
 }

 addMark(mark, discipline){
  if(!(discipline in this.marks)){
    this.marks[discipline] = [];
 } 
   
   if(mark <= 5){
   this.marks[discipline].push(mark);
   } else if(mark > 5) {
    return 'Ошибка, оценка должна быть числом от 1 до 5';
  }
}

getAverageBySubject(discipline) {
    for (let key in this.marks) {
        if (this.marks.hasOwnProperty(key)) {
            let sum = (this.marks[discipline].reduce((a, b) => a + b));
            let getAverageBySubject = sum / this.marks[discipline].length;
            return `Средний балл по предмету ${discipline} : ${getAverageBySubject}`;
        } else {
            return 'Несуществующий предмет';
        }
    }
}
getAverage() {
    const arrOfMarks = Object.values(this.marks).reduce((a, b) => a.concat(b));
    let getAverage = arrOfMarks.reduce((a, b) => a + b) / arrOfMarks.length;
    return `Средний балл по всем предметам ${getAverage}`;
}


exclude(reason) {
    if (reason === "Исключен за попытку подделать оценки") {
        for (let student in this) delete this[student];
    }
}

}