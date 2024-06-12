//                              ******************* MODULE PATTERN ******************

// let students=["Mehmet","Selin","Sevda"];


// var setStudents=(function(studentsArray){
    
//     const addStudent= function(name){
//         students.push(name);
//     }
//     const removeStudent= function(name){
//         let index=students.indexOf(name);
//         index>=0 ? students.splice(index,1):""; 
//     }
//     const getStudents=function(){
//         return students;    
//     }
//     return{addStudent,removeStudent,getStudents};//transforming to public
// })(students);

// setStudents.addStudent("Ali");
// setStudents.addStudent("Kerim");
// setStudents.removeStudent("Ali");
// console.log(setStudents.getStudents());

// var extendedStudents= (function(module){
//     module.message=function(){
//         console.log("THİS MESSAGE FROM EXTENDED STUDENTS MODULE");
//     }
//     return module;
// })(setStudents)

// extendedStudents.message();

//                                ************* SINGLETON PATTERN ***************


// const singletonPattern= (function(){

//     let instance;

//     function studentControl(){
//         const students=[
//             {student1:"Ali"},
//             {student2:"Selin"},
//             {student3:"Sevda"},
//             {student4:"Kerim"},
//         ];
//         const addstudent= function(student){
//             students.push(student);
//         }
//         const getStudents=function(){
//             return students;
//         }

//         return{addstudent,getStudents};
//     }

//     return{
//         getInstance:function(){
//             if(!instance){
//                 instance =new studentControl();
//             }
//             return instance;
//         }
//     }
// })()

// let st1=singletonPattern.getInstance();
// let st2=singletonPattern.getInstance();
// st1.addstudent({student5 : "Mehmet"})
// console.log(st2.getStudents());

//                           *************** FACTORY PATTERN ************

function FactoryPattern(){
    let emp;
    this.newEmp=function(emptype){
        if(emptype=="temporary"){
            emp=new Temporary();
        }
        else if(emptype=="parttime"){
            emp=new Parttime();
        }
        else if(emptype=="fulltime"){
            emp=new Fulltime();
        }
        else{
            console.log("type of employee is not defined");
        }
        emp.emptype=emptype;
        emp.price=function(){
            console.log(this.emptype+" employee the price per a hour is " +this.hourPrice);
        }
        return emp;
    }
   
}

function Temporary(){
    this.hourPrice="15$";
}

function Parttime(){
    this.hourPrice="25$";
}

function Fulltime(){
    this.hourPrice="35$";
}

var fact= new FactoryPattern();
var fulltimeEmp=fact.newEmp("fulltime");
var temporaryEmp=fact.newEmp("temporary");
var parttimeEmp=fact.newEmp("parttime");
fulltimeEmp.price();
temporaryEmp.price();
parttimeEmp.price();

