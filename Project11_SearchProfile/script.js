class Person{
    constructor(){
        this.name="",
        this.id="";
    }

    async getProfile(username){
       let response= await fetch(`https://jsonplaceholder.typicode.com/users?username=${username}`)
       let data= await response.json();
       if(data.length!==0){
        document.querySelector("#alertBox").classList.add("d-none");
        return data ;
       }else{
        document.querySelector("#alertBox").classList.remove("d-none");
        document.querySelector("#infoAlert").classList.remove("d-none");
       }
    }
    async showProfile(username){
        let response= await fetch(`https://jsonplaceholder.typicode.com/users?username=${username}`)
       let data= await response.json();
       if(data.length!==0){
        data=data[0];

        let profileBox=`
        <div class="card my-1">
            <div class="card-header h2">
                ${data.username}
            </div>
            <div class="card-body">
                <ul class="list-group infoBox" style="list-style: none;">
                    <li class="list-group-item ">Name : ${data.name}</li>
                    <li class="list-group-item ">Email : ${data.email}</li>
                    <li class="list-group-item ">Street : ${data.address.street}</li>
                    <li class="list-group-item ">City : ${data.address.city}</li>
                    <li class="list-group-item ">Phone : ${data.phone}</li>
                </ul>
            </div>
            <div class="card-footer">
                Company : ${data.company.name}
            </div>
        </div>    `
        document.querySelector("#profileBox").innerHTML=profileBox;
        document.querySelector("#infoAlert").classList.add("d-none");
        document.querySelector("#alertBox").classList.add("d-none");
        this.id=data.id;
        await fetch(`https://jsonplaceholder.typicode.com/todos?userId=${this.id}`)
        .then(res=> res.json())
        .then(todoData=>{
            document.querySelector("#todoBox").classList.remove("d-none");
            let i =1;
            todoData.forEach(element => {
             
                let li="";
                console.log(element.completed);
                if(element.completed){
                    li = `<li class="list-group-item bg-success">Todo ${i} : ${element.title}</li>`;
                    i++;
                }else{
                    li = `<li class="list-group-item bg-danger">Todo ${i} : ${element.title}</li>`;
                    i++;
                }
                document.querySelector("#todoList").insertAdjacentHTML("beforeend",li);
               
            });
        })

       }else{
        document.querySelector("#alertBox").classList.remove("d-none");
        profileBox.innerHTML="";
        document.querySelector("#todoList").innerHTML="";
       }
    }
}

const searchBtn=document.querySelector("#search");
const person= new Person();
searchBtn.addEventListener("keyup",(e)=>{
   let text=e.target.value;
   if(text!==""){
      person.showProfile(text);
   }
})

