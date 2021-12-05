1.let student={
   firstname:'',
   Lastname: '',
   grades: [],
  inputenewgrade:function(grade){
   this.grades.push(grade);
  },
  computeAverageGrade:function(){
    let sum=0;
    for(let i=0;i<this.grades.length;i++){
      sum=sum+this.grades[i];
    }
    console.log(sum/this.grades.length);
  }
  ,
};
let starray=[student1=Object.create(student).inputenewgrade(50),          student2=Object.create(student).inputenewgrade(60),
            student3= Object.create(student).inputenewgrade(70),student4=Object.create(student).inputenewgrade(80),student5=Object.create(student).inputenewgrade(90)];
 student.computeAverageGrade(); 
2).function Student(fname,lname,arr)
{
this.firstname=fname;
this.lastname=lname;
this.grades=arr;
}
Student.prototype.inputnewgrade=function(grade){
  console.log(grade);
  this.grades.push(grade);
}
Student.prototype.computeAverageGrade=function(){
   let sum=0;
    for(let i=0;i<this.grades.length;i++){
      sum=sum+this.grades[i];
    }
    console.log(this.firstname +" "+sum/this.grades.length);
}
let arr=[new Student("ab","cd",[50,20,20]).inputnewgrade(50),new Student("ef","zx",[50,20,20]).inputnewgrade(20)];
let user1=new Student("ab","cd",[50,20,20]);
user1.inputnewgrade(40);
user1.computeAverageGrade();
