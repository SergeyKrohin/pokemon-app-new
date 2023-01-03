import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {PokemonDataService} from '../../services/pokemon-data/pokemon-data.service';
import {PokemonInterface} from '../../interfaces/pokemon.interface';

@Component({
    selector: 'pokemon-list',
    templateUrl: './pokemon-list.component.html',
    styleUrls: ['./pokemon-list.component.scss']
})

export class PokemonListComponent implements OnInit {

    constructor(private pokemonDataService: PokemonDataService, private router: Router) {}

    public pokemonList: Array<PokemonInterface> = [];
    public selectedPokemon: PokemonInterface = {name: '', url: ''};
    
    public showDescription(pokemon: PokemonInterface) {
        this.selectedPokemon = pokemon;
        this.pokemonDataService.getCharacteristics(this.extractId(pokemon.url)).subscribe((res: any) => {
            this.selectedPokemon.description = this.getEnglishDescription(res.descriptions);
            console.log(res);
        });
        console.log(pokemon);
    }
    
    public showEvolutionChain(pokemon: PokemonInterface) {
        this.pokemonDataService.getPokemon(pokemon.name).subscribe((res: any) => {
            const chainId = this.extractId(res.evolution_chain.url);
            this.router.navigate(['/evolution-chain-wrapper', chainId]);
        });
    }
    
    private getEnglishDescription(descriptions: Array<any>):string {
		return descriptions.find(desc => desc.language.name === 'en').description;		
	}
    
    private extractId(url: any) {
		const splittedUrl = url.split('/');
		return splittedUrl[splittedUrl.length - 2];
	}

    ngOnInit() {
        this.pokemonDataService.getPokemonList(5).subscribe((res: any) => {
            this.pokemonList = res.results;
        });
    }

}