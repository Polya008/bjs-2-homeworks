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
  this.subject = subjectName;
}

Student.prototype.addMark = function(mark){ 
    if(this.marks === undefined){ 
       this.marks = [mark];
    }else{
      this.marks.push(mark);
    }
}

Student.prototype.addMarks = function(...marks){ 
    if(this.marks === undefined){ 
       this.marks = [...marks];
    } else {
      this.marks.push(...marks);
    }

  }  

Student.prototype.getAverage = function(){
   let sum = 0;
   for(let i = 0; i < this.marks.length; i++){
    sum += this.marks[i];
   }
 return sum / this.marks.length;
  }

Student.prototype.exclude = function(reason) {
  delete this.subjectName;
  delete this.marks;
  this.excluded = reason;
}