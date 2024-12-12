import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Performance} from '../performances/model/performance.model';

@Injectable({
  providedIn: 'root'
})
export class PerformanceService {

  constructor(private http: HttpClient) {}

  private performancesUrl = 'api/performances';

  getPerformances(): Observable<Performance[]> {
    return this.http.get<Performance[]>(this.performancesUrl);
  }
}
