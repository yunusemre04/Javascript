export default class Search {
    constructor(keyword) {
        this.keyword = keyword;
    }

    async getData() {
        const api_key = "e8a9d5f82d78ca210c8076d648685c12";
        const base_url = "https://api.themoviedb.org/3";

        const response = await fetch(`${base_url}/search/movie?api_key=${api_key}&page=1&query=${this.keyword}`);
        this.data = await response.json();
       
    }
}
