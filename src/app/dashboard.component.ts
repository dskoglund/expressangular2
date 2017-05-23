import { Component, OnInit }  from '@angular/core';

import { Golfer }             from './golfer';
import { GolferService }      from './golfer.service';

@Component({
  selector: 'my-dashboard',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {
  title = 'Dashboard';
  topgolfers = 'Top Golfers'
  golfers: Golfer[] = [];

  constructor(private golferService: GolferService) {}

  ngOnInit(): void {
    this.golferService.getGolfers()
      .then(golfers => this.golfers = golfers.slice(0,4))
  }
}
