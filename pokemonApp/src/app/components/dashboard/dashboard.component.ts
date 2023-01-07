import { Component, OnInit } from '@angular/core';
import {DataService} from '../../services/data/data.service';
import {WebsiteMetrics} from "../../types/website-metrics";
import {MetricsValues} from "../../types/metrics-values";
import {HttpErrorResponse} from "@angular/common/http";

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

    ngOnInit() {
        this.dataService.getJSON().subscribe({
          next: (res: WebsiteMetrics) => {
            this.analyticsData = res.data;
            this.title = res.title;
          },
          error: (err: HttpErrorResponse) => {
            console.log(err);
          }
        });

    }

}
