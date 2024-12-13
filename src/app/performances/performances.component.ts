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
  title: string = "Every performances";
  performances: Performance[] = [];
  @Input() dramaId: number = -1;

  constructor(private performanceService: PerformanceService) {}

  ngOnInit() {
    this.initPerformances();
  }

  initPerformances() {
    if (this.dramaId > -1) {
      this.performanceService.getPerformancesByDramaId(this.dramaId).subscribe(performances => this.performances = performances);
      this.title = "Not every performances";
    }
    this.performanceService.getPerformances().subscribe(performances => this.performances = performances);
  }
}
