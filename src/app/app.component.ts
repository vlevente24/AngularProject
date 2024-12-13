import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {DramasComponent} from './dramas/dramas.component';
import {PerformancesComponent} from './performances/performances.component';
import {PerformanceDetailComponent} from './performance-detail/performance-detail.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive, DramasComponent, PerformancesComponent, PerformanceDetailComponent],
  templateUrl: './app.component.html',
  standalone: true,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Theater';
  tmpPerformanceId = 2;
}
