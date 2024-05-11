//                                       *******   PART 1 Callback    *******

function login(username,password,callback){
    setTimeout(()=>{
        callback({userName:username,passWord:password});
    },1000);
}
getPosts=(username,callback)=>{
    let posts=["post1","post2","post3"];
    setTimeout(()=>{
        console.log("\n");
        console.log(username);
        callback(posts);
    },2000);
    
} 

login("legend123","56243",(user)=>{
    console.log(user);
    console.log(user.userName);
    console.log(user.passWord);
    getPosts(user.userName,(posts)=>{
        console.log(posts);
        
    });
})


