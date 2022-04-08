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

 /*findBookBy(type, value) {
  if(this.books.filter(type,value) != []){
    return this.books.filter(type,value);
  } else {
    return 'null';
  }
}*/

findBookBy(type, value) {
  for(let findType in this.books){
    if (findType === this.type && this.books.type === value){
    return book;
   } else {
    return 'null'
  }
}
}

giveBookByName(bookName) {
  let findBook =  this.books.findIndex(bookName);
  if(findBook != -1) {
    return this.books.splice(findBook,1);
  } else {
    return null;
  }
}

}
//Задание 3
class Student {
  constructor(name, surname) {
   this.name = name;
   this.surname = surname;
 }
 addMark(mark, discipline){
   this.mark = mark.push;
   this.discipline = discipline.push;
   if(mark > 5) {
    return 'Ошибка, оценка должна быть числом от 1 до 5';
  }
}

getAverageBySubject(value){
  if(discipline.filter(value)){
   let sum = 0;
   let arrOfMarks = discipline.filter(value);
   for(let i = 0; i < arrOfMarks.length; i++){
     sum += discipline.filter(value)[i];
   }
   let getAverageBySubject = sum / arrOfMarks.length;
   return `Средний балл по предмету ${discipline} : ${getAverageBySubject}`;
 }
 else if(discipline.filter(value) = false) {
  return 'Несуществующий предмет';
}
}
}