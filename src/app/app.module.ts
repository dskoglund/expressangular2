import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule }                from '@angular/core';
import { BrowserModule }           from '@angular/platform-browser';
import { FormsModule }             from '@angular/forms';
import { MaterialModule }          from '@angular/material';
import { HttpModule }              from '@angular/http';

import { AppRoutingModule }        from './app-routing.module';

import { DashboardComponent }      from './dashboard.component';
import { NavbarComponent }         from './navbar.component';
import { GolferDetailComponent }   from './golfer-detail.component';
import { AppComponent }            from './app.component';
import { GolfersComponent }        from './golfers.component';
import { PGAScheduleComponent }    from './pga-schedule.component';

import { GolferService }           from './golfer.service';
import { ScheduleService }         from './schedule.service';

import { InMemoryDataService }     from './in-memory-data.service';
import { InMemoryWebApiModule }    from 'angular-in-memory-web-api';

import 'hammerjs';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    MaterialModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService)
  ],
  declarations: [
    DashboardComponent,
    NavbarComponent,
    AppComponent,
    GolferDetailComponent,
    GolfersComponent,
    PGAScheduleComponent
  ],
  bootstrap:    [ AppComponent ],
  providers:    [
    GolferService,
    ScheduleService
  ]
})
export class AppModule { }
