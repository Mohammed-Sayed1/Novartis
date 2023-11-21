import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashbordComponent } from './components/dashbord/dashbord.component';
import { ChartsModule } from 'ng2-charts';
import { ChartComponent } from './components/chart/chart.component';


@NgModule({
  declarations: [
    DashbordComponent,
    ChartComponent
  ],
  imports: [
    CommonModule,
    ChartsModule,
  ],
  exports: [DashbordComponent]
})
export class DashboardModule { }
