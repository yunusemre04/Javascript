function Course(title,instructor,image){
    this.title=title;
    this.instructor=instructor;
    this.image=image;
}

const controle= document.querySelector("#statusControl");

UI.prototype.showWarning= function(message,bg){

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

function UI(){ 
}

UI.prototype.addtoList= function (item){
    let list = document.querySelector(".coursList");
    var htmlobj= `
    <tr>
    <td class="text-center"><img src="images/${item.image}" class="img"></td>
    <td class="text-center pt-4">${item.title}</td>
    <td class="text-center pt-4">${item.instructor}</td>
    <td class="text-center pt-4 col-1"><button type="button" class="btn btn-danger delete">Delete</button></td>
    </tr>`;
    list.innerHTML+=htmlobj;
}

document.querySelector(".coursList").addEventListener("click",function(e){
    let ui = new UI();
    console.log(e.target);
    ui.deleteItem(e.target);
    ui.showWarning("Cours has been deleted","danger");
});

UI.prototype.clearList= function (){
    const title=document.querySelector("#coursName").value="";
    const instructor=document.getElementById("instructor").value="";
    const image=document.getElementById("image").value="";
}

UI.prototype.deleteItem= function (item){
    console.log(item);
    if(item.classList.contains("delete")){
        item.parentElement.parentElement.remove();
    }
}

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
        ui.showWarning("Course has been added","success");
    }
});
 
