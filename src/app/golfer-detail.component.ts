import { Component, Input } from '@angular/core';

import { Golfer } from './golfer';

@Component({
  selector: 'golfer-detail',
  templateUrl: `./golfer-detail.component.html`
})
export class GolferDetailComponent {
  @Input() golfer: Golfer;
}
