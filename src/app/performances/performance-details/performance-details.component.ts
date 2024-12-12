import {Component, Input} from '@angular/core';
import {detailedPerformance} from './model/detailedPerformance.model';
import {PerformanceService} from '../../services/performance.service';

@Component({
  selector: 'app-performance-details',
  imports: [],
  templateUrl: './performance-details.component.html',
  standalone: true,
  styleUrl: './performance-details.component.css'
})
export class PerformanceDetailsComponent {

  @Input() id: number = 1;

  constructor(private performanceService: PerformanceService, public Dperformance: detailedPerformance) {}

  ngOnInit() {
    this.initDetailedPerformance();
  }

  initDetailedPerformance() {
    this.performanceService.getPerformanceById(this.id).subscribe(performance => this.Dperformance = performance);
  }
}
