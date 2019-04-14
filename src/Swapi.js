

export default class Swapi {

    _apiBase = "https://swapi.co/api"

    async getResource(url){
        const res = await fetch(`${this._apiBase}${url}`);
        if(!res.ok){
            throw new Error("WARNING");
        }
        return await res.json();
    }

    async getPlanet(id){
        return await this.getResource(`/planets/${id}`)
    }

    async getPeople(id){
            return await this.getResource(`/people/${id}`)
        }

    async getStarship(id){
        return await this.getResource(`/starships/${id}`)
    }

    async getAllPeople(){
        return await this.getResource('/people');
    }

    async getAllPlanet(){
        return await this.getResource('/planets');
    }

    async getAllStarship(){
        return await this.getResource('/starships');
    }

   

    

}
