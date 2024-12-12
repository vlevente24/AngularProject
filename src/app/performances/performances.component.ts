import {Component, Input} from '@angular/core';
import {Performance} from './model/performance.model';
import {PerformanceService} from '../services/performance.service';

@Component({
  selector: 'app-performances',
  imports: [],
  templateUrl: './performances.component.html',
  standalone: true,
  styleUrl: './performances.component.css'
})
export class PerformancesComponent {
  @Input() title: string = "Every performances";
  performances: Performance[] = [];

  constructor(private performanceService: PerformanceService) {}

  ngOnInit() {
    this.initPerformances();
  }

  initPerformances() {
    this.performanceService.getPerformances().subscribe(performances => this.performances = performances);
  }
}
