import {Component, Input} from '@angular/core';

@Component({
  templateUrl: 'rating.component.html',
  selector: 'mo-rating',
  inputs: ['data']
})

export class RatingComponent {
  public data: any;
  public percent: any;
  public number: any;
  public color: any;

  constructor() {
  }
  ngOnInit () {

  }
}
