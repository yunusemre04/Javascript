import Search from './modal/Search.js';
import {elements,getLoadingIcon,clearLoadingIcon} from './elements.js';
import * as searchView from './view/searchView.js';
import "../style.css";  
import Movie from './modal/Movie.js';
import {displayMovie} from './view/movieView.js'

const state={};



let isOpen=false;
elements.searchIcon.addEventListener("click",function(){
    let width;
    let maxWidth=110;

    if(isOpen==true){
        width=maxWidth;

        let Interval=setInterval(function(){
        if (width >= 0) {
            width -= 1;
            elements.text.style.width = width + '%';
            if(width<=0){
                elements.text.classList.add("d-none");
                elements.sBtn.classList.add("d-none");
            }
        }else{
            clearInterval(Interval);
        }},5)

        isOpen=false; 
    }else{
        elements.text.classList.remove("d-none");
        width=0;

        let Interval=setInterval(function(){
        if (width < maxWidth) {
            width += 1;
            elements.text.style.width = width + '%';
        }else{
            clearInterval(Interval);
        }},5);

        elements.sBtn.classList.remove("d-none");
        isOpen=true;
    }
})

elements.sBtn.addEventListener("click",async ()=>{
    let content=elements.text.value;
    if(content!=""){
        searchView.clearInput();
        searchView.clearData();
        getLoadingIcon();
        state.search=new Search(content);
        await state.search.getData();
        console.log(state.search.data);
        clearLoadingIcon();
        searchView.displayData(state.search.data);
    }else{
        alert("Please don't leave it blank Movie Name field");
    }

})

const movieController=async ()=>{
    const id= window.location.hash.replace("#","");
    if(id){
        getLoadingIcon();
        state.movie=new Movie(id);
        const data = await state.movie.getMovie();
        displayMovie(state.movie.data);
        clearLoadingIcon();
        console.log(state.movie.data);
    }
};

window.addEventListener("hashchange",movieController);