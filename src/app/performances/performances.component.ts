import {Component, Input} from '@angular/core';
import {Performance} from './model/performance.model';

@Component({
  selector: 'app-performances',
  imports: [],
  templateUrl: './performances.component.html',
  standalone: true,
  styleUrl: './performances.component.css'
})
export class PerformancesComponent {
  @Input() title: string = "Every performances";

  p1 = new Performance(1, "Hófehérke és a hét törpe", new Date(2025, 0, 1, 19, 30), "A terem", "Disney");
  p2 = new Performance(2, "Pál utcai fiúk", new Date(2025, 1, 2, 20, 30), "A terem", "Dési László");
  p3 = new Performance(3, "A dzsungel könyve", new Date(2025, 1, 3, 17, 0), "B terem", "Dési László");
  performances: Performance[] = [this.p1, this.p2, this.p3];
}
