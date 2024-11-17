import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgxEchartsModule } from 'ngx-echarts';

@Component({
  selector: 'app-calls-agent-dashboard-kpi-calls-card',
  standalone: true,
  imports: [NgxEchartsModule, CommonModule],
  templateUrl: './calls-agent-dashboard-kpi-calls-card.component.html',
  styleUrl: './calls-agent-dashboard-kpi-calls-card.component.scss',
})
export class CallsAgentDashboardKpiCallsCardComponent {
  color: string = 'orange';
  percent: number = 50;
  width: number = 10;
  size: number = 100;

  options: any = {
    series: [
      {
        type: 'gauge',
        startAngle: 90,
        endAngle: -270,
        radius: `${this.size}%`,

        pointer: {
          show: false,
        },
        progress: {
          show: true,
          overlap: false,
          roundCap: true,
          clip: false,
          itemStyle: {
            color: this.color,
          },
        },
        axisLine: {
          lineStyle: {
            width: this.width,
            color: [[1, '#E8EDF3']],
          },
        },
        splitLine: {
          show: false,
        },
        axisTick: {
          show: false,
        },
        axisLabel: {
          show: false,
        },
        data: [
          {
            value: this.percent,
            name: 'Progress',
            title: {
              show: false,
            },
            detail: {
              valueAnimation: true,
              offsetCenter: ['0%', '0%'],
              formatter: '{value}%',
              color: '#333',
              fontSize: 21,
              fontWeight: 'bold',
            },
          },
        ],
        title: {
          show: false,
        },
        detail: {
          show: true,
        },
      },
    ],
  };
}
