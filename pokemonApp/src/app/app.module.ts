import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MetricsComponent } from './components/metrics/metrics.component';
import { ChartComponent } from './components/chart/chart.component';
import { MetricBlock } from './components/metrics/metric-block/metric-block.component';
import { UtilsService } from './services/utils/utils.service';
import { DataService } from './services/data/data.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ChartComponent,
    MetricsComponent,
    MetricBlock
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    DataService,
    UtilsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
