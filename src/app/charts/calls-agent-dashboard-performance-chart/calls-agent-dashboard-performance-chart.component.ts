import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgxEchartsModule } from 'ngx-echarts';

@Component({
  selector: 'app-calls-agent-dashboard-performance-chart',
  standalone: true,
  imports: [NgxEchartsModule, CommonModule],
  templateUrl: './calls-agent-dashboard-performance-chart.component.html',
  styleUrl: './calls-agent-dashboard-performance-chart.component.scss',
})
export class CallsAgentDashboardPerformanceChartComponent {
  svgPath: string = `path://M5.72632 37.9362C5.09317 38.1178 4.41015 38.1631 3.71888 38.0436C1.29238 37.6244 -0.320078 35.3336 0.117464 32.9273L3.72008 13.1133L5.01232 6.00592L5.8883 1.18807C5.94572 0.872545 6.15382 0.683454 6.39572 0.614092C6.80893 0.495604 7.32083 0.726343 7.34837 1.27262L7.58495 5.96652L7.96697 13.5437L8.97009 33.4401C8.98434 33.7624 8.96512 34.1146 8.90483 34.4459C8.59197 36.1668 7.31568 37.4805 5.72632 37.9362ZM6.70291 33.1129C6.36331 31.9286 5.12916 31.2436 3.94637 31.5827C2.76357 31.9219 2.07995 33.1567 2.41958 34.3412C2.75914 35.5254 3.99332 36.2105 5.17612 35.8714C6.35891 35.5322 7.04248 34.2971 6.70291 33.1129Z`;

  option: any = {
    series: [
      {
        type: 'gauge',
        center: ['50%', '60%'],
        radius: '40%',
        startAngle: 180,
        endAngle: 0,
        min: 0,
        max: 60,
        splitNumber: 20,
        itemStyle: {
          color: '#3354F4',
        },
        progress: {
          show: false,
          width: 30,
        },
        pointer: {
          show: true,
          length: 37,
          width: 20,
          icon: this.svgPath,
          offsetCenter: [0, 0],
          keepAspect: true,
        },
        axisLine: {
          lineStyle: {
            width: 0,
          },
        },
        axisTick: {
          distance: -45,
          splitNumber: 5,
          lineStyle: {
            width: 5,
            color: '#0000',
          },
        },
        splitLine: {
          distance: -60,
          length: 25,
          lineStyle: {
            width: 4,
            color: '#3354F4',
          },
        },
        axisLabel: {
          distance: -20,
          color: '#000',
          fontSize: 0,
        },
        anchor: {
          show: false,
        },
        title: {
          show: false,
        },
        detail: {
          valueAnimation: true,
          width: '40%',
          lineHeight: 40,
          borderRadius: 0,
          offsetCenter: [0, '70%'],
          fontSize: 30,
          fontWeight: 'bolder',
          fontFamily: 'Poppins',
          formatter: '{value}%',
          color: '#2E2A2A',
        },
        data: [
          {
            value: 20,
          },
        ],
      },
    ],
  };
}
