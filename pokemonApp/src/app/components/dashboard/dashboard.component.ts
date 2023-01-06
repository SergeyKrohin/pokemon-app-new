import { Component, OnInit } from '@angular/core';
import {DataService} from '../../services/data/data.service';
import {IMetricsValues} from "../../interfaces/metrics-values.interface";

@Component({
    selector: 'dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {

    constructor(private dataService: DataService) {}

    public chartHeight: number = 400;
    public analyticsData:Array<IMetricsValues> = [];
    public title: string = '';
    public metrics:Array<string> = [
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
