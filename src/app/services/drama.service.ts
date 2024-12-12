import { Injectable } from '@angular/core';
import {Drama} from '../dramas/model/drama.model';

@Injectable({
  providedIn: 'root'
})
export class DramaService {

  constructor() {}

  getDramas(): Drama[] {
    let hofeherke: Drama = new Drama(1, "Hófehérke és a hét törpe", "mese", 90, "https://marvin.bline.hu/product_images/121/0489001068637G.JPG", "Disney", 1);
    let pal: Drama = new Drama(2, "Pál utcai fiúk", "dráma", 130, "https://marvin.bline.hu/product_images/35/ID22-297208.JPG", "Dési László", 2);
    let dzsungel: Drama = new Drama(3, "A dzsungel könyve", "mese", 120, "https://turayidaszinhaz.hu/wp-content/uploads/2015/10/dzsungel_honlap_belso.jpg", "Dési László", 2);
    let mamamia: Drama = new Drama(4, "Mamma Mia", "musical", 100, "https://pb2.jegy.hu/imgs/system-4/program/000/050/830/mamma-mia-original-200500.jpg", "Szirtes Tamás", 3);
    return [hofeherke, pal, dzsungel, mamamia];
  }
}
