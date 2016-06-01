import { Component } from 'angular2/core';
import { Keg } from './keg.model';
/// <reference path="jquery.d.ts" />;

@Component({
    selector: 'keg-display',
    inputs: ['keg'],
  template: `
  <div>
    <input type="button" (click)="servePint()"/>
    <label>{{ keg.name }}, <br> Brand: {{ keg.brand }}, <br> Price: {{ keg.price }}, <br> Alcohol Content: {{keg.alcoholContent}}, <br> Pints Left:  {{ keg.pints }}</label>

    <div class="progress">
      <div id="{{ keg.name }}" class="progress-bar" role="progressbar" aria-valuenow="0"
      aria-valuemin="0" aria-valuemax="0" style="Width: 100%">
        <span class="sr-only">70% Complete</span>
      </div>
    </div>
  </div>
  <div id="test">Test</div>
  `
})
export class KegComponent {
  public keg: Keg;

  servePint(){
    this.keg.pints -= 1;
    var test = "#" + this.keg.name;
    var pintsLeft = ((this.keg.pints/124) * 100);

    if(this.keg.pints === 123) {
      $(test).css('width', '100%');
      console.log("fail");
    } else {
      $(test).css('width', pintsLeft + "%");
      console.log("success");
    }

    console.log(test);
    console.log(pintsLeft);
  }

}
