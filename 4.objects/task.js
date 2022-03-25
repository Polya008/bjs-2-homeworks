function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
}

const student1 = new Student('Paul', 'man', 20);
const student2 = new Student('Alex', 'man', 19);
const student3 = new Student('Kate', 'woman', 21);
const student4 = new Student('Andrew', 'man', 20);

Student.prototype.setSubject = function(subjectName) {
  this.subjectName = subjectName;
}

Student.prototype.addMark = function([marks]){  
    if(this.marks === undefined){ 
    this.marks = marks[0];
    } else {
    this.marks = marks.push;
    }
}

Student.prototype.addMarks = function([...marks]){  
    this.marks = marks.push;
  }  

Student.prototype.getAverage = function([...marks]){  
   let sum = 0;
   for(let i = 0; i < marks.length; i++){
    sum +=  marks[i];
   }
   return  'sum / marks.length';
  }

Student.prototype.exclude = function(reason) {
  delete Student.setSubject;
  delete Student.marks;
  this.reason = reason;
}