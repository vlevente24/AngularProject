import { Component } from '@angular/core';
import {Drama} from './model/drama.model';

@Component({
  selector: 'app-dramas',
  imports: [],
  templateUrl: './dramas.component.html',
  standalone: true,
  styleUrl: './dramas.component.css'
})
export class DramasComponent {
  str: string = "Dramas";
  drama: Drama = new Drama(1, "Hófehérke és a hét törpe", "mese", 90, "https://cms.static.marquardmedia.hu/data/cikk/339/339821.1200x630.jpg", "Disney", 1);
}
