//Задание 1
class PrintEditionItem {
 constructor(name, releaseDate, pagesCount){
  this.name = name;
  this.releaseDate = releaseDate;
  this.pagesCount = pagesCount;
   }
  type = null;
  state = 100;
  
  fix() {
    if( 0 < state < 100){
    return state * 1.5;
  } else if (state > 100){
    return 'state === 100';
  }
}

  set calculateState(state){
    if(state < 0){
      state = 0;
    } else if (state >= 100) {
      state = 100;
    } 
    return 'state';
  }

  get showState() {
    return `state = ${state}`;
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
class Libriry {
  constructor(name,books){
    this.name = name;
    this.books = [];
}
    
  addBook(book){
    if(state > 30){
     books.push(book);
    }
  }

  findBookBy(type, value) {
    if(books.filter(type,value) != []){
    return books.filter(type,value);
  } else {
    return 'null';
  }
}
  
  giveBookByName(bookName) {
    if(books.findIndex(bookName)) {
    let findBook =  books.findIndex(bookName);
     return books.splice(findBook,1);
   } else {
    return 'null';
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