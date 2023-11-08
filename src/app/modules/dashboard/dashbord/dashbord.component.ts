import { Component, OnInit } from "@angular/core";
import { Label } from "ng2-charts";
import { ChartOptions, ChartType, ChartDataSets } from "chart.js";

// interface ChartConfig {
//   type: ChartType;
//   data: ChartDataSets[];
//   labels: Label[];
//   options: ChartOptions;
//   // colors: Color[];
//   title: string;
// }

@Component({
  selector: "app-dashbord",
  templateUrl: "./dashbord.component.html",
  styleUrls: ["./dashbord.component.scss"],
})
export class DashbordComponent implements OnInit {
  chartConfigs = [
    {
      type: "doughnut",
      data: [
        {
          data: [40, 60],
          backgroundColor: [
            "#9C27B0", // Purple
            "#673AB7", // Deep Purple
            "#2196F3", // Blue
            "#00BCD4", // Cyan
            "#009688", // Teal
            "#4CAF50", // Green
            "#8BC34A", // Light Green
            "#FFC107", // Amber
            "#FF9800", // Orange
            "#FF5722", // Deep Orange
            "#607D8B", // Blue Grey
            "#BDBDBD", // Grey
            "#CFD8DC", // Silver
            "#ECEFF1", // White Smoke
            "#FAFAFA", // Off White
            "#F5F5F5", // White Smoke
            "#9E9E9E", // Dark Gray
            "#666666", // Medium Gray
            "#333333", // Dark Gray
          ],
        },
      ],
      labels: ["American Questions", "European Questions"],
      options: {
        responsive: true,
        maintainAspectRatio: false,
        tooltips: {
          callbacks: {
            label: this.tooltipLabelCallback,
          },
        },
      },
      title: "Questions",
    },
    {
      type: "pie",
      data: [
        {
          data: [10, 35, 25, 5, 25],
          backgroundColor: [
            "#2196F3", // Blue
            "#00BCD4", // Cyan
            "#009688", // Teal
            "#4CAF50", // Green
            "#8BC34A", // Light Green
            "#FFC107", // Amber
            "#FF9800", // Orange
            "#FF5722", // Deep Orange
            "#607D8B", // Blue Grey
            "#BDBDBD", // Grey
            "#CFD8DC", // Silver
            "#ECEFF1", // White Smoke
            "#FAFAFA", // Off White
            "#F5F5F5", // White Smoke
            "#9E9E9E", // Dark Gray
            "#666666", // Medium Gray
            "#333333", // Dark Gray
          ], 
        }
      ],
      labels: [
        "Pulmonology",
        "Cardiothoracic Surgery",
        "Critical Care",
        "Gastroenterology",
        "Hepatology",
      ],
      options: {
        responsive: true,
        maintainAspectRatio: false,
        tooltips: {
          callbacks: {
            label: this.tooltipLabelCallback,
          },
        },
      },
      title: "Specialization",
    },
    {
      type: "doughnut",
      data: [
        {
          data: [35, 25, 20, 15, 5],
          backgroundColor: [
            "#607D8B", // Blue Grey
            "#BDBDBD", // Grey
            "#CFD8DC", // Silver
            "#ECEFF1", // White Smoke
            "#F5F5F5", // White Smoke
            "#9E9E9E", // Dark Gray
            "#666666", // Medium Gray
            "#333333", // Dark Gray
          ],
        }
      ],
      labels: [
        "Riyadh",
        "Jeddah",
        "Mecca",
        "Al-Madinah al-Munawwarah",
        "Dammam",
      ],
      options: {
        responsive: true,
        maintainAspectRatio: false,
        tooltips: {
          callbacks: {
            label: this.tooltipLabelCallback,
          },
        },
      },
      title: "Cities",
    },
    {
      type: "bar",
      data: [
        {
          data: [0, 5, 7, 9, 10, 13, 5, 7, 9, 10, 13, 5, 7, 9, 10, 13],
          backgroundColor: [
            "#607D8B", // Blue Grey
            "#BDBDBD", // Grey
            "#CFD8DC", // Silver
            "#9E9E9E", // Dark Gray
            "#666666", // Medium Gray
            "#333333", // Dark Gray
            "#607D8B", // Blue Grey
            "#BDBDBD", // Grey
            "#CFD8DC", // Silver
            "#9E9E9E", // Dark Gray
            "#666666", // Medium Gray
            "#333333", // Dark Gray
            "#607D8B", // Blue Grey
            "#BDBDBD", // Grey
            "#CFD8DC", // Silver
          ],
        }
      ],
      labels: [
        "",
        "King Fahad Medical",
        "Abdul Lateef Jameel Hospital",
        "Almana General Hospital",
        "Saudi German Hospital",
        "Saudi National Hospital",
        "King Fahad Medical",
        "Abdul Lateef Jameel Hospital",
        "Almana General Hospital",
        "Saudi German Hospital",
        "Saudi National Hospital",
        "King Fahad Medical",
        "Abdul Lateef Jameel Hospital",
        "Almana General Hospital",
        "Saudi German Hospital",
        "Saudi National Hospital",
      ],
      options: {
        responsive: true,
        maintainAspectRatio: false,
        tooltips: {
          callbacks: {
            label: this.tooltipLabelCallback,
          },
        },
      },
      title: "Hospitals",
    },
    {
      type: "bar", // Set the chart type to "bar" for a bar chart
      data: [
        {
          data: [3, 5, 7, 9, 10, 13, 5, 7, 9, 10, 13, 5, 7, 9, 10, 13],
          backgroundColor: [
            "#607D8B", // Blue Grey
            "#BDBDBD", // Grey
            "#CFD8DC", // Silver
            "#9E9E9E", // Dark Gray
            "#666666", // Medium Gray
            "#333333", // Dark Gray
            "#607D8B", // Blue Grey
            "#BDBDBD", // Grey
            "#CFD8DC", // Silver
            "#9E9E9E", // Dark Gray
            "#666666", // Medium Gray
            "#333333", // Dark Gray
            "#607D8B", // Blue Grey
            "#BDBDBD", // Grey
            "#CFD8DC", // Silver
          ],
        },
      ],
      labels: [
        "Label 1",
        "Label 2",
        "Label 3",
        "Label 4",
        "Label 5",
        "Label 6",
        "Label 7",
        "Label 8",
        "Label 9",
        "Label 10",
        "Label 11",
        "Label 12",
        "Label 13",
        "Label 14",
        "Label 15",
        "Label 16",
      ],
      options: {
        responsive: true,
        maintainAspectRatio: false,
        tooltips: {
          callbacks: {
            label: this.tooltipLabelCallback,
          },
        },
        scales: {
          xAxes: [{
              gridLines: {
                  offsetGridLines: true
              }
          }]
      },
        plugins: {
          legend: {
            display: false, // Set the legend display to false to hide it
          },
        },
        title: {
          display: true,
          text: "Hospitals",
        },
      },
      title: "Hospitals",
    }
  ];

  constructor() {}

  ngOnInit(): void {}

  tooltipLabelCallback(tooltipItem, data): string {
    // Calculate the total of all data points
    const total = data.datasets[0].data.reduce((sum, value) => sum + value, 0);
    const currentValue = data.datasets[0].data[tooltipItem.index];
    // Calculate the percentage and format it
    const percentage = ((currentValue / total) * 100).toFixed(2) + "%";
    // Return the label for the tooltip
    return data.labels[tooltipItem.index] + ": " + percentage;
  }
}
