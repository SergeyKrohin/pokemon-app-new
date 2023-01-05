import { Component, Input } from '@angular/core';

@Component({
    selector: 'metric-block',
    templateUrl: './metric-block.component.html',
    styleUrls: ['./metric-block.component.scss']
})

export class MetricBlock {

    @Input() name: any = '';
    @Input() value: any = 0;
    
}