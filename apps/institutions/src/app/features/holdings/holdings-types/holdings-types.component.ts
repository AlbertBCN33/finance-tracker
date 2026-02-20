import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartModule } from 'primeng/chart';
import { UiCardComponent } from '@finance-tracker/ui';
import { ChartData, ChartOptions } from 'chart.js';
import { ChartUtils } from '@finance-tracker/utils';
import { AssetsType } from '@finance-tracker/models';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-holdings-types',
  imports: [CommonModule, UiCardComponent, ChartModule],
  templateUrl: './holdings-types.component.html',
  styleUrl: './holdings-types.component.scss',
})
export class HoldingsTypesComponent implements OnInit {
  translate = inject(TranslateService);
  private readonly documentStyle = getComputedStyle(document.documentElement);
  private readonly textColor =
    this.documentStyle.getPropertyValue('--p-text-color');

  //   data: ChartData<'doughnut'> | null = {
  //     labels: Object.keys(AssetsType).map((x) =>
  //       this.translate.instant(`ASSETS_TYPE.${x}`)
  //     ),
  //     datasets: [
  //       {
  //         data: Object.keys(AssetsType).map((x) => 1),
  //         backgroundColor: Object.keys(AssetsType).map((x, i) =>
  //           ChartUtils.addColor(i)
  //         ),
  //         hoverBorderColor: Object.keys(AssetsType).map((x, i) =>
  //           ChartUtils.addColor(i)
  //         ),
  //       },
  //     ],
  //   };

  data: ChartData<'doughnut'> | null = {
    labels: [],
    datasets: [
      {
        data: [],
      },
    ],
  };
  options = ChartUtils.setDefaultOptionsDoughnut(this.textColor);

  ngOnInit(): void {
    console.log(
      'Object.keys(AssetsType)',
      Object.keys(AssetsType),
      Object.keys(AssetsType).length,
      Object.keys(AssetsType).map((x) => 0)
    );
    // this.data = {
    //   labels: ['A', 'B', 'C'],
    //   datasets: [
    //     {
    //       data: [60, 30, 10, 20, 50, 70, 60, 30, 10, 20, 50],
    //       backgroundColor: [
    //         ChartUtils.addColor(0),
    //         ChartUtils.addColor(1),
    //         ChartUtils.addColor(2),
    //         ChartUtils.addColor(3),
    //         ChartUtils.addColor(4),
    //         ChartUtils.addColor(5),
    //         ChartUtils.addColor(6),
    //         ChartUtils.addColor(7),
    //         ChartUtils.addColor(8),
    //         ChartUtils.addColor(9),
    //         ChartUtils.addColor(10),
    //         ChartUtils.addColor(11),
    //       ],
    //       hoverBackgroundColor: [
    //         ChartUtils.addColor(0),
    //         ChartUtils.addColor(1),
    //         ChartUtils.addColor(2),
    //         ChartUtils.addColor(3),
    //         ChartUtils.addColor(4),
    //         ChartUtils.addColor(5),
    //         ChartUtils.addColor(6),
    //         ChartUtils.addColor(7),
    //         ChartUtils.addColor(8),
    //         ChartUtils.addColor(9),
    //         ChartUtils.addColor(10),
    //         ChartUtils.addColor(11),
    //       ],
    //     },
    //   ],
    // };
  }
}
