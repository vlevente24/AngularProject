import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {DramasComponent} from './dramas/dramas.component';

@Component({
  selector: 'app-root',
  imports: [DramasComponent],
  templateUrl: './app.component.html',
  standalone: true,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Theater';
}
