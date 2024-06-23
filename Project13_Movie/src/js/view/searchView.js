import { elements } from "../elements.js";

export const displayData= (data)=>{
    elements.resultInfo.classList.remove("d-none");
    elements.resultInfo.innerHTML=`<div class="h5 "> ${data.total_results} results found</div>`;
    data.results.forEach(movie => {
        const imgUrl=`https://image.tmdb.org/t/p/w154/${movie.poster_path}`;
        let color="";
        if(movie.vote_average<5){
          color="bg-danger";
        }else if(movie.vote_average>=5 && movie.vote_average<7){
         color="bg-warning";
        }else{
          color="bg-success";
        }
       

        const element=`
        <div class="row  text-light bg-dark info mt-2">
            <div class="col-md-2 text-center info">
                <img src="${imgUrl} class="img-fluid " >
            </div>
            <div class="col-md-10 mt-1">
                <div class="d-flex"></div>
                <div class="h2 p-2 info">
                  <span class="movieAverage px-2 mb-1 h3 ${color}">${movie.vote_average.toFixed(1)}</span>
                  <a href="#${movie.id}" class=" movieLink" style="text-decoration:none;">${movie.title}</a>
                </div>
                <div class="h6 p-2 info">${movie.release_date}</div>
                <div class="h6 p-2 info">${movie.overview}</div>
                <div class="text-end "><button type="button" class="btn moreInfo  h6 "><a href="#${movie.id}" class="text-light" style="text-decoration:none";>More Info</a></button></div>
            </div>
            
        </div>`;
        
      elements.movieBox.insertAdjacentHTML("beforeend",element);
      
        
        
    });
};

export const clearData=()=>{
  elements.movieBox.innerHTML="";
}
export const clearInput=()=>{
  elements.text.value="";
}

export const imgSizes={
backdrop_sizes: [
  "w300",
  "w780",
  "w1280",
  "original"
],
logo_sizes: [
  "w45",
  "w92",
  "w154",
  "w185",
  "w300",
  "w500",
  "original"
],
poster_sizes: [
  "w92",
  "w154",
  "w185",
  "w342",
  "w500",
  "w780",
  "original"
],
profile_sizes: [
  "w45",
  "w185",
  "h632",
  "original"
],
still_sizes: [
  "w92",
  "w185",
  "w300",
  "original"
]
}