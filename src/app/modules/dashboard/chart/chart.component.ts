import { Component, Input, OnInit } from "@angular/core";
import { Color } from "ng2-charts";
import { ChartOptions } from "chart.js";

@Component({
  selector: "app-chart",
  template: `
    <div>
      <div>{{ chartTitle }}</div>
      <div *ngIf="chartType == 'doughnut'" style="position: relative;">
        <canvas
          height="350"
          baseChart
          [chartType]="chartType"
          [datasets]="chartData"
          [labels]="chartLabels"
          [options]="chartOptions"
        ></canvas>
      </div>
      <div *ngIf="chartType == 'pie'">
        <canvas
          height="350"
          baseChart
          [chartType]="chartType"
          [datasets]="chartData"
          [labels]="chartLabels"
          [options]="chartOptions"
        ></canvas>
      </div>

      <div *ngIf="chartType == 'bar'" style="position: relative;">
        <canvas
          height="350"
          baseChart
          [chartType]="chartType"
          [datasets]="chartData"
          [labels]="chartLabels"
          [options]="chartOptions"
        ></canvas>
      </div>
    </div>
  `,
  styleUrls: ["./chart.component.scss"],
})
export class ChartComponent {
  @Input() chartType: string;
  @Input() chartData: any[];
  @Input() chartLabels: string[];
  @Input() chartOptions: ChartOptions;
  // @Input() chartColors: Color[];
  @Input() chartTitle: string;

  // Calculate the canvas height based on the number of labels
  get canvasHeight(): string {
    const labelCount = this.chartLabels.length;
    // Define a base height or adjust it based on your design
    const baseHeight = 300;
    // Calculate the height based on label count (adjust as needed)
    const dynamicHeight = baseHeight + labelCount * 15; // You can adjust the multiplier
    return dynamicHeight + "px";
  }
}
