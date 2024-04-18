
var models = [
    {
        name:"Lombo",
        image:"images/images.jpg",
        link:"https://www.caranddriver.com/lamborghini/aventador",
        brief:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, quisquam."
    },
    {
        name:"Peugeot",
        image:"images/Peugeot.jpg",
        link:"https://www.topgear.com/car-reviews/peugeot/2008",
        brief:"Dolor sit amet consectetur adipisicing elit. Error, dolorem."
    },
    {
        name:"Opel",
        image:"images/opel.jpg",
        link:"https://depositphotos.com/editorial/red-opel-corsa-108756980.html",
        brief:"Ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus voluptates obcaecati optio?"
    }
]
var settings = {
    duration:'2000',
    random: true
}


var interval;
var index=0;
init(settings);

document.querySelector(".bi-arrow-right").addEventListener("click",function(){
    index++;
    if(index>models.length-1){
        index=0;
    }
    changeSlide(index);
});
document.querySelector(".bi-arrow-left").addEventListener("click",function(){
    index--;
    if(index<0){
        index=models.length-1;
    }
    changeSlide(index)
});

function changeSlide(index){
    document.querySelector(".card-body h2").textContent=models[index].name;
    document.querySelector(".card img").setAttribute("src",models[index].image);
    document.querySelector(".card-footer p").textContent=models[index].brief;
    document.querySelector("#link").setAttribute("href",models[index].link);
}
function init(settings){
    interval=setInterval(function(){
        
        if(settings.random){
            var prev=index;
            index= Math.floor(Math.random()*models.length);
            while(prev==index){
                index= Math.floor(Math.random()*models.length);
            }
            console.log(index);
            
        }
        else{
            index++;
            if(index>models.length-1){
               index=0;
            }
            console.log(index);
        }
        
        changeSlide(index);
    },settings.duration);
}
document.querySelectorAll(".arrow").forEach(function(arrow){
    arrow.addEventListener("mouseenter",function(){
        clearInterval(interval);
    })
});
document.querySelectorAll(".arrow").forEach(function(arrow){
    arrow.addEventListener("mouseleave",function(){
        init(settings);
    })
});
