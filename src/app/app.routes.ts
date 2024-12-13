import { Routes } from '@angular/router';
import {DramasComponent} from './dramas/dramas.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {PerformancesComponent} from './performances/performances.component';

export const routes: Routes = [
  {path: 'dramas', component: DramasComponent},
  { path: 'performances', component: PerformancesComponent},
  { path: '**', component: PageNotFoundComponent}
];
