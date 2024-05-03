const controle= document.querySelector("#statusControl");
class Course{
    constructor(title,instructor,image){
        this.title=title;
        this.instructor=instructor;
        this.image=image;
        this.cId=Math.floor(Math.random()*100000);
    }
}
class Storage{
    static getCours(){
        let courses;
       if(localStorage.getItem("courses")===null){
            courses=[];
       }else{
            courses= JSON.parse(localStorage.getItem('courses'));
       }
       return courses;
        
    }
    static displayCours(){
       let courses=Storage.getCours();
       courses.forEach(element => {
        const ui = new UI;
        ui.addtoList(element);
       });
    }
    static addCours(course){
        let courses= Storage.getCours();
        courses.push(course);
        localStorage.setItem("courses",JSON.stringify(courses));
    }
    static deleteCourse(coursElement){
       if(coursElement.classList.contains("delete")){
        let id= coursElement.getAttribute("data-id");
        
        let courses=Storage.getCours();
        courses.forEach((cours,index)=>{
            if( cours.cId==id){
                courses.splice(index,1);
            }
        });
        localStorage.setItem('courses',JSON.stringify(courses));
       }
      
    }
}
class UI{
    showWarning(message,bg){
        let element=`
           <div class="alert alert-${bg} h6 text-center">
            ${message}
           </div>
        `
        controle.innerHTML=element;
        setTimeout(()=>{
            document.querySelector(".alert").remove();
        },2500);
    }
    addtoList(item){
        let list = document.querySelector(".coursList");
        var htmlobj= `
        <tr>
        <td class="text-center"><img src="images/${item.image}" class="img"></td>
        <td class="text-center pt-4">${item.title}</td>
        <td class="text-center pt-4">${item.instructor}</td>
        <td class="text-center pt-4 col-1"><button type="button" data-id="${item.cId}" class="btn btn-danger delete">Delete</button></td>
        </tr>`;
        list.innerHTML+=htmlobj;
    }
    clearList(){
        const title=document.querySelector("#coursName").value="";
        const instructor=document.getElementById("instructor").value="";
        const image=document.getElementById("image").value="";
    }
    deleteItem(item){
        console.log(item);
        if(item.classList.contains("delete")){
            item.parentElement.parentElement.remove();
            return true;
        }
    }
}

document.addEventListener("DOMContentLoaded",Storage.displayCours);

document.querySelector(".coursList").addEventListener("click",function(e){
    let ui = new UI();
 
    if(ui.deleteItem(e.target)==true){
        Storage.deleteCourse(e.target);
        ui.showWarning("Cours has been deleted","danger");
    }
  
});

document.querySelector(".coursInfo").addEventListener("submit",function(e){
    e.preventDefault();

    const title=document.querySelector("#coursName").value;
    const instructor=document.getElementById("instructor").value;
    const image=document.getElementById("image").value;
    let ui=new UI();
    if(title==='' || instructor==='' || image===''){
        ui.showWarning("Please don't leave it blank","warning");
    }else{
        let course= new Course(title,instructor,image);
        
        ui.addtoList(course);
        Storage.addCours(course);
       

        ui.showWarning("Course has been added","success");
    }
});
 