import { Component } from 'angular2/core';
import { Keg } from './keg.model';

@Component({
    selector: 'keg-display',
    inputs: ['keg'],
  template: `
  <div>
    <input type="button" (click)="servePint()"/>
    <label>{{ keg.name }}</label>
  </div>
  `
})
export class KegComponent {
  public keg: Keg;

  servePint(){

    this.keg.pints -= 1;
    console.log(this.keg.pints);
  }
}
