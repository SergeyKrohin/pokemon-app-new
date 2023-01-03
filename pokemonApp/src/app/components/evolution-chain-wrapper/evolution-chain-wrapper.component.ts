import { Component, Input, Output, OnInit, SimpleChanges, OnChanges } from '@angular/core';

@Component({
    selector: 'evolution-chain-wrapper',
    templateUrl: './evolution-chain-wrapper.component.html',
    styleUrls: ['./evolution-chain-wrapper.component.scss']
})

export class EvolutionChainWrapperComponent {
    
    constructor() {}
    
    public onOutputChange(e: string) {
        console.log(e);
    }
    
    ngOnInit() {
        
    }
}

