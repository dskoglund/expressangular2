import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import './rxjs-operators';

import { PGAEvent }       from './pga-schedule-event'

@Injectable()
export class UpcomingScheduleService {
  private scheduleUrl = '/upcoming_pga_schedule';

  constructor (private http: Http) {}

  getSchedule(): Observable<PGAEvent[]> {
    return this.http.get(this.scheduleUrl)
                    .map(this.extractScheduleData)
                    .catch(this.handleError);
  }

  private extractScheduleData( res: Response ) {
    let body = res.json();
    let pgaEvents = PGAEvent[] = [];

    for (const item in body) {
      let pgaEvent = body[item];
      let pgaEventData: PGAEvent = {
        date: pgaEvent.date,
        tournamentEvent: pgaEvent.tournamentEvent,
        tournamentLocation: pgaEvent.tournamentLocation,
        tv: pgaEvent.tv,
        defendingChamp: pgaEvent.defendingChamp,
        purse: pgaEvent.purse,
        completed: pgaEvent.completed
      };
      pgaEvents.push(pgaEventData);
    }
    return pgaEvents;
  }

  private handleError (error: any) {
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    return Observable.throw(errMsg);
  }
}
