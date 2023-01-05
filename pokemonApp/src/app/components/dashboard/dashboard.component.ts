import { Component, OnInit } from '@angular/core';
import {DataService} from '../../services/data/data.service';

@Component({
    selector: 'dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {

    constructor(private dataService: DataService) {}

    public analyticsData = [];
    public title = '';
    public metrics = [
        'impressions',
        'clicks',
        'cost',
        'conversions'
    ];
    

    ngOnInit() {
        this.dataService.getJSON().subscribe((res: any) => {
            this.analyticsData = res.data;
            this.title = res.title;
        });

    }

}