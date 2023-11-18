// Student class
function Student(name, gpa) {
    this.name = name;
    this.gpa = gpa;
 }
 // Course class
 function Course(title) {
    this.title = title;
    this.students = [];
    // addStudent method
    Course.prototype.addStudent = function(student) {
       this.students.push(student);
    }
    //displayStudent method
    Course.prototype.displayStudents = function() {
       console.log(title)
       for (i = 0; i < this.students.length; i++) {
          console.log(this.students[i].name);
          console.log(this.students[i].gpa);
       }
    }
 }    
    visc104 = new Course("Experience/Interface (UX/UI)");
 
    visc104.addStudent(new Student("Student A",3.95));
    visc104.addStudent(new Student("Student B",3.47));
 
    sdev255 = new Course("Web Application Development");
 
    sdev255.addStudent(new Student("Student C",3.54));
    sdev255.addStudent(new Student("Student D",3.05));
    
    visc104.displayStudents();
    sdev255.displayStudents();
 