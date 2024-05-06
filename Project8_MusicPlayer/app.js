const container= document.querySelector(".container-fluid");
const player= new MusicPlayer(musicList);
const musicImage= document.querySelector(".img");
const musicTitle= document.querySelector(".musicName");
const singer= document.querySelector(".singer");
const musics=document.querySelector(".musicList");
const playBtn= document.querySelector(".playBtn");
const audio=document.querySelector("audio");
const currentTime=document.querySelector("#current-time");
const totalTime=document.getElementById("total-time");
const progressBar=document.getElementById("bar");
const volumeBar=document.querySelector(".volume");
const volumeIcon=document.querySelector("#volume-icon");

let id=0;

let music=player.getMusic();
console.log(music);
player.nextMusic();
console.log(player.getMusic().singer);

document.querySelector(".nextBtn").addEventListener("click",function(){
    player.nextMusic();
    console.log(player.getMusic());
    container.classList.remove("playing");
    setFeature();
    playBtn.classList.remove("bi-pause-circle-fill");
    playBtn.classList.add("bi-play-circle");
});

document.querySelector(".previousBtn").addEventListener("click",function(){
    player.previousMusic();
    console.log(player.getMusic());
    container.classList.remove("playing");
    setFeature();
    playBtn.classList.remove("bi-pause-circle-fill");
    playBtn.classList.add("bi-play-circle");
})
display();
setFeature();
function display(){
    player.musicIndex=0;
    
    for(let i=0;i<musicList.length;i++){
        let object=`<div class="d-flex musicItem   m-2 ">
      <span class="m-2 h3 bg-dark text-light p-1 musicName" id=${id} style="border-radius:5px">${player.getMusic().musicName}</span>
      <span class="m-3 h5 bg-dark text-light p-1 singer"  style="border-radius:5px">${player.getMusic().singer}</span>
      </div>`
     musics.innerHTML+=object;
     id++;
     player.musicIndex++;
    } 
}



function setFeature(){
    
    document.querySelectorAll(".musicName").forEach((item)=>{
        if(item.id==player.musicIndex){
            let img=`<img class="img-item border-dark" src="images/${player.getMusic().img}">`;
            musicImage.innerHTML=img;
            audio.setAttribute("src",`mp3/${player.getMusic().mp3}`)
            // document.querySelector("#audio-box").innerHTML=`<audio id="audio" src="mp3/${player.getMusic().mp3}"></audio>`

            item.parentElement.style.backgroundColor="red";
        }else{
            
            item.parentElement.style.backgroundColor="white";
        }

    });
  
}

playBtn.addEventListener("click",function(){
    const isPlaying= container.classList.contains("playing");

    isPlaying ? stopMusic():playMusic();

    
})

musics.addEventListener("click",function(e){
    setFeature();
    playBtn.classList.remove("bi-pause-circle-fill");
    playBtn.classList.add("bi-play-circle");

    player.musicIndex=e.target.children[0].id;
})


function stopMusic(){
    audio.pause();
    container.classList.remove("playing");
    playBtn.classList.remove("bi-pause-circle-fill");
    playBtn.classList.add("bi-play-circle");
}
function playMusic(){
    audio.play();
    container.classList.add("playing");
    playBtn.classList.remove("bi-play-circle");
    playBtn.classList.add("bi-pause-circle-fill");
}

audio.addEventListener("loadedmetadata",()=>{
    totalTime.textContent=calculateTime(audio.duration);
    progressBar.max=Math.floor(audio.duration);
})

audio.addEventListener("timeupdate",function(){
    progressBar.value=Math.floor(audio.currentTime);
    currentTime.textContent=calculateTime(progressBar.value);
})

progressBar.addEventListener("input",function(){
    currentTime.textContent=calculateTime(progressBar.value);
    audio.currentTime=progressBar.value;
})

function calculateTime(time){
    let minutes = Math.floor(time/60);
    let seconds= Math.floor(time%60);
    let updateSeconds= seconds<10 ? `0${seconds}`:seconds;
    let result= `${minutes}.${updateSeconds}`;
    return result;
}

let isMuted = false; 

volumeIcon.addEventListener("click", function() {
    if (isMuted) {
        audio.muted = true;
        volumeIcon.classList.remove("bi-volume-up-fill");
        volumeIcon.classList.add("bi-volume-mute-fill");
        isMuted = false; 
        volumeBar.value=0;
    } else {
        audio.muted = false;
        volumeIcon.classList.remove("bi-volume-mute-fill");
        volumeIcon.classList.add("bi-volume-up-fill");
        isMuted = true; 
        volumeBar.value=50;
    }
});

volumeBar.addEventListener("input",(e)=>{
    const value= e.target.value;
    audio.volume=value/100;
    if(value==0){
        
        volumeIcon.classList.remove("bi-volume-up-fill");
        volumeIcon.classList.add("bi-volume-mute-fill");
        isMuted = false; 
       
    }else{
        
        volumeIcon.classList.remove("bi-volume-mute-fill");
        volumeIcon.classList.add("bi-volume-up-fill");
        isMuted = true; 
    
    }
})

audio.addEventListener("ended",function(){
    player.musicIndex++;
    setFeature();
    audio.play();
})
