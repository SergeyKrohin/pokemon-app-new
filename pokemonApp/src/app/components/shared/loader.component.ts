import {Component, OnInit, OnDestroy} from '@angular/core';

@Component({
    selector: 'loader',
    templateUrl: './loader.component.html',
    styleUrls: ['./loader.component.scss']
})

export class Loader implements OnInit, OnDestroy {

    constructor() {
    
    }

    ngOnInit() {
        console.log('on init');
    }
    
    ngOnDestroy() {
        console.log('on destroy');
    }


}