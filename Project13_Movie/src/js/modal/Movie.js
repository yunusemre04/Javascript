export default class Movie{
    constructor(id){
        this.id=id;
    }
    async getMovie(){
        const api_key = "e8a9d5f82d78ca210c8076d648685c12";
        const base_url = "https://api.themoviedb.org/3";

        const response= await fetch(`${base_url}/movie/${this.id}?api_key=${api_key}`);
        this.data=await response.json();
    }
}