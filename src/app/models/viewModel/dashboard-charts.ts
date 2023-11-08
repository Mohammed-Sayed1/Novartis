export class DashboardCharts {

  ChartName: string;
  ChartType?: string;
  Data: KeyValueChart[] = [];
  //chartsDatalist: ChartsDatalist = new ChartsDatalist();
  ChartLabels?: string[] = [];
  chartdata?: number[] = [];
  chartSeriesdata: Serieslist[] = [];
}

export class KeyValueChart {
  ChartKey: string;
  ChartValue: number;
}

export class ChartsDatalist {
  chartType: number;
  chartTypename: string;
  ChartLabels: string[] = [];
  chartdata: number[] = [];
  SeriesName: string[] = [];
  chartSeriesdata: Serieslist[] = [];
  ChartName: string;
}

export class Serieslist {
  data: number[] = [];
  label: string;
  labelID: number;
  stack: string;
  lineThickness: number;
  fill: boolean;
}