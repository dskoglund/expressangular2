import { NgModule }              from "@angular/core";
import { RouterModule, Routes }  from "@angular/router";

import { DashboardComponent }    from './dashboard.component';
import { GolferDetailComponent } from './golfer-detail.component';
import { GolfersComponent }      from './golfers.component';
import { PGAScheduleComponent }  from './pga-schedule.component';

const routes : Routes = [
  {
    path: 'detail/:id',
    component: GolferDetailComponent
  },
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'golfers',
    component: GolfersComponent
  },
  {
    path: 'schedule',
    component: PGAScheduleComponent
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
