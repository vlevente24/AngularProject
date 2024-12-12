import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {DramasComponent} from './dramas/dramas.component';
import {PerformancesComponent} from './performances/performances.component';
import {PerformanceDetailsComponent} from './performances/performance-details/performance-details.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive, DramasComponent, PerformancesComponent, PerformanceDetailsComponent],
  templateUrl: './app.component.html',
  standalone: true,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Theater';
  tmpPerformanceId = 1;
}
