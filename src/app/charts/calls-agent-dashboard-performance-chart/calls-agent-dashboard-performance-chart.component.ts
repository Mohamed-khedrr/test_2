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
  options: any;
}
