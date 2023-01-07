import { Injectable } from '@angular/core';
import {MetricBlock} from "../../types/metric-block";

@Injectable()
export class MetricsService {

  constructor() { }

  private metrics: Array<MetricBlock> = [
    {name: 'impressions', text: 'The number of times a piece of content has been displayed to users.'},
    {name: 'clicks', text: 'The number of times a piece of content has been clicked on by users.'},
    {name: 'cost', text: 'The amount of money spent on advertising.'},
    {name: 'conversions', text: 'The number of times a particular action has been taken as a result of viewing a piece of content.'}
  ];

  public getMetrics(): Array<MetricBlock> {
    return this.metrics;
  }
}
