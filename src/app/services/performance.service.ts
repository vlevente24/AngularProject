import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Performance} from '../performances/model/performance.model';
import {detailedPerformance} from '../performance-detail/model/detailedPerformance.model';

@Injectable({
  providedIn: 'root'
})
export class PerformanceService {

  constructor(private http: HttpClient) {}

  private performancesUrl = 'api/performances';

  getPerformances(): Observable<Performance[]> {
    return this.http.get<Performance[]>(this.performancesUrl);
  }

  getPerformancesByDramaId(id: number): Observable<Performance[]> {
    return this.http.get<Performance[]>(this.performancesUrl + '/drama/' + id);
  }

  getPerformanceById(id: number): Observable<detailedPerformance> {
    return this.http.get<detailedPerformance>(this.performancesUrl + '/' + id);
  }
}
