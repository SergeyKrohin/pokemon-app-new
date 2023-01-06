import { Component, OnInit } from '@angular/core';
import {DataService} from '../../services/data/data.service';
import {WebsiteMetrics} from "../../types/website-metrics";
import {MetricsValues} from "../../types/metrics-values";

@Component({
    selector: 'dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {

    constructor(private dataService: DataService) {}

    public chartHeight: number = 400;
    public analyticsData:Array<MetricsValues> = [];
    public title: string = '';
    public metrics:Array<string> = [
        'impressions',
        'clicks',
        'cost',
        'conversions'
    ];


    ngOnInit() {
        this.dataService.getJSON().subscribe((res: WebsiteMetrics) => {
            this.analyticsData = res.data;
            this.title = res.title;
        });

    }

}
