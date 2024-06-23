import { elements } from "../elements";

export const displayMovie=(data)=>{
    const movieImgUrl=`https://image.tmdb.org/t/p/w342/${data.poster_path}`;
    elements.resultInfo.classList.add("d-none");
    elements.infoBox.innerHTML="";
    let genres="";
    let companies="";
    console.log(data.Object);
   
    data.production_companies.forEach(element => {
        companies += (element.name+" , ");
    });

    data.genres.forEach(element => {
        genres += (element.name+" , ");
    });
    
    let color="";
        if(data.vote_average<5){
          color="bg-danger";
        }else if(data.vote_average>=5 && data.vote_average<7){
         color="bg-warning";
        }else{
          color="bg-success";
        }

    let html=`
    <div class="row mb-2">
        <div class="col-md-4 border text-center">
            <img src="${movieImgUrl}" class="img-fluid " >
        </div>
        <div class="col-md-8">
            <div class="card">
                <div class="card-header text-center h2 bg-dark text-light">${data.title}</div>
                <div class="card-body bg-dark border">
                    <ul class="list-group" style="list-style:none">
                        <li class="list-group-item h5"><span class="h4">Brief : </span>${data.overview}</li>
                        <li class="list-group-item h5"><span class="h4">Release Date : </span> ${data.release_date}</li>
                        <li class="list-group-item h5"><span class="h4">Companies : </span>${companies}</li>
                        <li class="list-group-item h5"><span class="h4">Country : </span>France</li>
                        <li class="list-group-item h5"><span class="h4">Genres : </span>${genres}</li>
                        <li class="list-group-item h5"><span class="h4">Vote Average : </span><span class="px-2 mb-1 h3 ${color}">${data.vote_average.toFixed(1)}</span></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>`;

    elements.movieBox.classList.add("d-none");
    elements.backIcon.classList.remove("d-none");
   
    elements.infoBox.classList.remove("d-none");
    elements.infoBox.insertAdjacentHTML("beforeend",html);

    elements.backIcon.addEventListener("click",()=>{
        elements.movieBox.classList.remove("d-none");
        elements.backIcon.classList.add("d-none");
        elements.infoBox.classList.add("d-none");
        elements.resultInfo.classList.remove("d-none");
    })
}