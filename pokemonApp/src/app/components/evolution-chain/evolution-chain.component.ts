import { Component, EventEmitter, Input, Output, OnInit, SimpleChanges, OnChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonDataService } from '../../services/pokemon-data/pokemon-data.service';
import { PokemonInterface } from '../../interfaces/pokemon.interface';

@Component({
    selector: 'evolution-chain',
    templateUrl: './evolution-chain.component.html',
    styleUrls: ['./evolution-chain.component.scss']
})

export class EvolutionChainComponent implements OnInit, OnChanges {
    
    
    constructor(private pokemonDataService: PokemonDataService, private route: ActivatedRoute) {}
    
    @Input() testInput: any;
    @Input() inputString: any;
    @Output() testOutput: any = new EventEmitter();;
    
    public pokemonList: Array<PokemonInterface> = [];
    public term: string = '';
    
    public onFilterChange(e: any) {
        this.term = e;
        this.testOutput.emit(e);
    }
    
    private chainToList(evolutionChain: any):Array<PokemonInterface> {	
		const list = []; 
		(function chain(evolutionChain) {
			list.push({name: evolutionChain.species.name});
			if(evolutionChain.evolves_to.length){
				evolutionChain.evolves_to.forEach((item: any) => {
					chain(item);
				});
			}
		})(evolutionChain);
		return list;
	}
    
    ngOnInit() {
    
        console.log('abc: ', this.inputString);
    
        this.route.data.subscribe((data) => {
            this.pokemonList = this.chainToList(data['evolutionChain'].chain); 
        });
    }
    
    ngOnChanges(changes: SimpleChanges) {
		if(changes['testInput'] && changes['testInput']['currentValue']) {
            console.log(changes);
		}
	}
}

