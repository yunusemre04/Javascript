////                                  PART 1 ARROW AND ARRAY FUNCTION

// var message =()=> "WELCOME";
// var element = document.querySelector(".el");
// var element2 = document.querySelector(".answer");
// var a = message();
// element.innerText;
// var sum = (a,b)=> a+b;
// element2.innerText= sum(5,6);

// const numbers=[10,54,1,25,21,36,2,15,27];

// const oddNumber= numbers.filter((number)=> number%2==1); 
// const findNumber= numbers.find((number)=> number>20);
// console.log(findNumber);
// console.log(oddNumber);

// const cars=[{carName:"opel",carPrice:30000},{carName:"Tesla",carPrice:100000},{carName:"Toyota",carPrice:50000},{carName:"Peugeot",carPrice:75000}];

// var result= cars.filter((car)=> car.carPrice >40000).map((car)=> car.carName);
// console.log(result);

// var index= cars.findIndex((car)=> car.carName=="Toyota");
// console.log(index);

//                                     PART2 SEPRATE AND DESTRUCTURİNG

// const personelInfo=["Yunus Emre","Acar","Student","Sakarya"];

// console.log(...personelInfo);

// var prInfo=[...personelInfo];
// prInfo[2]="Software Engineer";
// console.log(personelInfo);
// console.log(prInfo);

// function multiply(...args){
//     let multi=1;
//     for(let num of args){
//         multi*=num;
//     }
//     console.log(multi);
// }

// multiply(5,7);
// multiply(2,3,9);

// var obj={name:"computer",price:1000};
// var objInfo={width:250,height:500};

// console.log({...obj,...objInfo});
// a("ahmet","mersin","25");
// function a(name,...info){
//     console.log(name,info);
// }
// //DESTRUCTURİNG
// var nameArray=["Selin","Mehmet"];

// var [name1,name2]=nameArray;

// console.log(name1,name2);

// var [name1,name2]="Kerem Emre".split(" ");
// console.log(name1,name2);

// let personInfo=["Melis","Derin","Sakarya","30"];
// let[firstname,lastname,...otherInfo]=personInfo;
// console.log(firstname,lastname,otherInfo);

// let newObj= {
//     width:150,
//     height:250,
//     isSold:false,
//     price:25000
// }
// displayObject(newObj);
// function displayObject(object){
//     var {width,height,isSold=false,price=0}=object;
//     console.log(width,height,isSold,price);
// }

//                                                   PART 3 MAP

// const movie= new Map();

// movie.set("Django","2012");
// movie.set("Gladiator","2002");
// movie.set("MovieNumber", 2);

// console.log(movie);

// movie.delete("MovieNumber");
// console.log(movie);
// movie.set("MovieNumber", 2);
// console.log(movie.size);
// console.log(movie.get("Django"));
// //movie.clear();
// for(let m of movie.keys()){
//     console.log(m);
// }

// for(let m of movie.entries()){
//     console.log(m);
// }

// for(let [key,value] of movie.entries()){
//     console.log(key,value);
// }

//                                               PART 4 SET

// let array= new Set();

// array.add(5);
// array.add("45");
// array.add(3);
// array.add(5);
// console.log(array);
// console.log(array.has(5));
// for(let num of array){
//     console.log(num);
// }
// array.delete(3);
// console.log(array);

//                                PART 5 CLASS & GETTER & SETTER

// class PersonelInfo{
//     constructor(name,surname,birthyear){
//         this.name=name;
//         this.surname=surname;
//         this.birthyear=birthyear;
//     }

//     calculateAge(year){
//         return year-this.birthyear;
//     }

//     get name(){
//         return this._name;
//     }
    
//     set name(value){
//         if(value.length<3 ||  value.length>15){
//             console.log("Error name must beetween 3-15");
//             return;
//         }
//         this._name=value;
//     }
    
// }

// let personel= new PersonelInfo("Ahmet","Deniz",2000);
// console.log(personel);
// console.log(personel.name);
// console.log(personel.calculateAge(2024));

// let p2= new PersonelInfo("Au","Derin",2005);

// console.log(p2);

//                                       PART 6 INHERITANCE


class Person{
    constructor(name,surname,age){
        this.name=name;
        this.surname=surname;
        this.age=age;
    };
    personInfo(){
        return `${this.name+' '+this.surname+' '+"has been added person class"}`;
    }
}
class Student extends Person{
    constructor(name,surname,age,studentNumber){
        super(name,surname,age);
        this.studentNumber=studentNumber;
    }
}

class Teacher extends Person{
    constructor(name,surname,age,branch){
        super(name,surname,age);
        this.branch=branch;
    }
    personInfo(){
        return `Teacher ${this.name} has been added in Teacher class`
    }
}

let pr1= new Person("Ahmet","Kerim",35);
console.log(pr1.personInfo());
let st1= new Student("Zehra","Derin",18,125);
console.log(st1);
console.log(st1.personInfo());
let th1= new Teacher("Selen","Melis",35,"math");
console.log(th1.personInfo());