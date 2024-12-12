import {Component, Input} from '@angular/core';
import {Drama} from './model/drama.model';
import {DramaService} from '../services/drama.service';

@Component({
  selector: 'app-dramas',
  imports: [],
  templateUrl: './dramas.component.html',
  standalone: true,
  styleUrl: './dramas.component.css'
})
export class DramasComponent {
  @Input() str: string = "Dramas";
  dramas: Drama[] = [];

  constructor(private dramaService: DramaService) {}

  ngOnInit() {
    this.initDramas();
  }

  initDramas() {
    this.dramas = this.dramaService.getDramas();
  }
}
