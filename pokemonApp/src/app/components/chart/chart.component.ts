import * as c3 from 'c3';
import { Component, OnChanges, Input, SimpleChanges } from '@angular/core';
import {MetricsValues} from "../../types/metrics-values";

@Component({
    selector: 'chart',
    templateUrl: './chart.component.html',
    styleUrls: ['./chart.component.scss']
})

export class ChartComponent implements OnChanges {

    constructor() {}

    @Input() analyticsData: Array<MetricsValues> = [];
    @Input() height: number = 0;


  private transformData(data: Array<MetricsValues>): Array<[string, ...number[]]> {
    // structure data for c3 chart columns
    const transformedData: Array<[string, ...number[]]> = [];
    const keys = Object.keys(data[0]);
    for (const key of keys) {
      const values = data.map((item: any) => item[key]);
      transformedData.push([key, ...values]);
    }
    return transformedData;
  }

  ngOnChanges(changes: SimpleChanges) {
    if (!changes['analyticsData'].firstChange) {

        c3.generate({
            size: {
                height: this.height
            },
            legend: {
                position: 'right'
            },
            data: {
                x: 'timestamp',
                xFormat: '%Y-%m-%d %H:%M:%S', // how the date is parsed
                columns: this.transformData(this.analyticsData),
                colors: {
                    conversions: '#70da79',

                }
            },
            axis: {
                x: {
                    type: 'timeseries',
                    localtime: false,
                    tick: {
                        format: '%Y-%m-%d %H:%M:%S'
                    }
                }
            }
        });
    }
  }

}
