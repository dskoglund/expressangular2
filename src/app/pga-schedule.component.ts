import { Component }        from '@angular/core';

import { PGAEvent }         from './pga-schedule-event';

import { Golfer }           from './golfer';
import { GolferService }    from './golfer.service';
import { ScheduleService }  from './schedule.service';

@Component({
  selector: 'pga-upcoming-schedule',
  templateUrl: `./pga-schedule.component.html`,
  styleUrls: ['./pga-schedule.component.css']
})

export class PGAScheduleComponent {
  toolbarTitle = 'PGA Upcoming Schedule of Events';
  golfers: Golfer[];

  constructor(private golferService: GolferService, private scheduleService: ScheduleService) { }

  getGolfers(): void {
    this.golferService.getGolfers()
    .then(golfers => this.golfers = golfers);
  };

  getHello(): void {
    this.scheduleService.getHello()
    .then(res => console.log(res))
    .then(console.log(res))
  }

  ngOnInit(): void {
    this.getGolfers();
    this.getHello();
  }
}
