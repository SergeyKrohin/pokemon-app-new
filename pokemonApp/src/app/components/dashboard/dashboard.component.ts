import { Component, OnInit } from '@angular/core';
import {DataService} from '../../services/data/data.service';
import {WebsiteMetrics} from "../../types/website-metrics";
import {MetricsValues} from "../../types/metrics-values";
import {MetricBlock} from "../../types/metric-block";

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
    public metrics:Array<MetricBlock> = [
      {name: 'impressions', text: 'The number of times a piece of content has been displayed to users.'},
      {name: 'clicks', text: 'The number of times a piece of content has been clicked on by users.'},
      {name: 'cost', text: 'The amount of money spent on advertising.'},
      {name: 'conversions', text: 'The number of times a particular action has been taken as a result of viewing a piece of content.'}
    ];


    ngOnInit() {
        this.dataService.getJSON().subscribe((res: WebsiteMetrics) => {
            this.analyticsData = res.data;
            this.title = res.title;
        });

    }

}
