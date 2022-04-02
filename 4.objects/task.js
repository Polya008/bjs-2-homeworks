function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
}

const student11 = new Student('Paul', 'man', 20);
const student22 = new Student('Alex', 'man', 19);
const student3 = new Student('Kate', 'woman', 21);
const student4 = new Student('Andrew', 'man', 20);

Student.prototype.setSubject = function(subjectName) {
  this.subjectName = subjectName;
}

Student.prototype.addMark = function(mark){ 
    if(this.marks === undefined){ 
     this.marks = [mark];
    }else{
   this.marks.push(mark);
    }
}

Student.prototype.addMarks = function(...mark){ 
    this.marks = this.marks.push[mark];
  }  

Student.prototype.getAverage = function(marks){
   let sum = 0;
   for(let i = 0; i < this.marks.length; i++){
    sum += this.marks[i];
   }
 let getAverage = sum / this.marks.length;
 return Math.floor(getAverage * 10000) / 10000;
  }

Student.prototype.exclude = function(reason) {
  delete Student.subjectName;
  delete Student.marks;
  this.reason = reason;
}