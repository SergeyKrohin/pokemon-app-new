import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { UtilsService } from '../../services/utils/utils.service';

@Component({
    selector: 'metrics',
    templateUrl: './metrics.component.html',
    styleUrls: ['./metrics.component.scss']
})

export class MetricsComponent implements OnChanges {

    constructor(private utilsService: UtilsService) {}

    @Input() analyticsData: any;
    @Input() metrics: any;

    public metricOptions = ['sum', 'average'];
    public currentMetricOption: any = this.metricOptions[0];
    public metricValues: any = {};
    private memoizedCalculateTotals: any;
    private memoizedCalculateAverages: any;

    private setMetricValues(metricOption: string) {
        if(this.currentMetricOption === 'sum') {
            this.metricValues[this.currentMetricOption] = this.memoizedCalculateTotals(this.analyticsData, this.metrics);
        } else {
             this.metricValues[this.currentMetricOption] = this.memoizedCalculateAverages(this.metricValues['sum'], this.analyticsData.length);
        }
    }

    public onMetricOptionChange(event: Event) {
        const input = event.target as HTMLInputElement;
        this.currentMetricOption = input.value;
        this.setMetricValues(this.currentMetricOption);
    }

    private calculateTotals(data: any, metrics: any) {
      // Create an empty object to store the sums
      const sums: any = {};

      // Iterate over the metrics
      for (const metric of metrics) {
        // Use the reduce method to sum the values of the metric
        sums[metric] = data.reduce((sum: any, entry: any) => sum + entry[metric], 0);
      }

      return sums;
    }

    private calculateAverages(metrics: any, dataLength: number) {

        const averages: any = {};

        for(let metric in metrics) {
            averages[metric] = Math.floor(metrics[metric] / dataLength)
        }

        return averages;
    }

    ngOnChanges(changes: SimpleChanges) {
        if (!changes['analyticsData'].firstChange) {
            this.memoizedCalculateTotals = this.utilsService.memoize(this.calculateTotals);
            this.memoizedCalculateAverages = this.utilsService.memoize(this.calculateAverages);
            this.setMetricValues('sum');
        }
    }

}
