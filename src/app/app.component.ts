import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ParentComponent } from './parent/parent.component';
import { DebounceComponent } from './debounce/debounce.component';
import { CallsAgentDashboardKpiCallsCardComponent } from './charts/calls-agent-dashboard-kpi-calls-card/calls-agent-dashboard-kpi-calls-card.component';
import { CallsAgentDashboardPerformanceChartComponent } from './charts/calls-agent-dashboard-performance-chart/calls-agent-dashboard-performance-chart.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    ParentComponent,
    DebounceComponent,
    CallsAgentDashboardKpiCallsCardComponent,
    CallsAgentDashboardPerformanceChartComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'scroll';
}
