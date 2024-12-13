import {Component, Input} from '@angular/core';
import {PerformanceService} from '../services/performance.service';
import {detailedPerformance} from './model/detailedPerformance.model';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'app-performance-detail',
  imports: [
    DatePipe
  ],
  templateUrl: './performance-detail.component.html',
  standalone: true,
  styleUrl: './performance-detail.component.css'
})
export class PerformanceDetailComponent {
  @Input() id: number = 3;
  public Dperformance: detailedPerformance | undefined;
  public d : Date = new Date(2021, 1, 1);

  constructor(private performanceService: PerformanceService) {}

  ngOnInit() {
     this.initDetailedPerformance();
  }

  initDetailedPerformance() {
    this.performanceService.getPerformanceById(this.id).subscribe(performance => this.Dperformance = performance);
  }
}
