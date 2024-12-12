import { Injectable } from '@angular/core';
import {Drama} from '../dramas/model/drama.model';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DramaService {

  constructor(private http: HttpClient) {}

  private dramasUrl = 'api/dramas';

  getDramas(): Observable<Drama[]> {
    return this.http.get<Drama[]>(this.dramasUrl);
  }
}
