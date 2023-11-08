import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashbordComponent } from './dashbord/dashbord.component';
import { ChartsModule } from 'ng2-charts';
import { ChartComponent } from './chart/chart.component';


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
