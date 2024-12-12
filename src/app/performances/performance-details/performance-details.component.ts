import {Component, Input} from '@angular/core';
import {detailedPerformance} from './model/detailedPerformance.model';

@Component({
  selector: 'app-performance-details',
  imports: [],
  templateUrl: './performance-details.component.html',
  standalone: true,
  styleUrl: './performance-details.component.css'
})
export class PerformanceDetailsComponent {

  @Input() id: number = 1;

  // performance: detailedPerformance = undefined;
}
