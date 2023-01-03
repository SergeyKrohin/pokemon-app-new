import {Injectable} from '@angular/core';
import {HttpService} from '../http/http.service';

@Injectable()
export class PokemonDataService {

    constructor(private httpService: HttpService) {}
    
    private url = 'https://pokeapi.co/api/v2/';

    public getCharacteristics(id: string) {
        return this.httpService.get(this.url + 'characteristic/' + id + '/');
    }
    
    public getPokemonList(limit: number) {
        return this.httpService.get(this.url + 'pokemon-species/?limit=' + limit);
    }
    
    public getPokemon(name: string) {
        return this.httpService.get(this.url + 'pokemon-species/' + name + '/');
    }
    public getEvolutionChain(id: number) {
        return this.httpService.get(this.url + 'evolution-chain/' + id + '/');
    }
}