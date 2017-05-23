import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Golfer }        from './golfer';

@Injectable()
export class GolferService {

  private golfersUrl = 'api/golfers'

  constructor(private http: Http) {}

  getGolfers(): Promise<Golfer[]> {
    return this.http.get(this.golfersUrl)
               .toPromise()
               .then(response => response.json().data as Golfer[])
               .catch(this.handleError);
  }

  getHello(): void {
    return this.http.get('hello')
                .toPromise()
                .then(response => console.log(response))
                .then(console.log('response service hit'))
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
