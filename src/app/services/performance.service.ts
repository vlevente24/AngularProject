import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Drama} from '../dramas/model/drama.model';

@Injectable({
  providedIn: 'root'
})
export class PerformanceService {

  // constructor(private http: HttpClient) {}
  //
  // private performancesUrl = 'api/dramas';
  //
  // getDramas(): Observable<Drama[]> {
  //   return this.http.get<Drama[]>(this.performancesUrl);
  // }
}
