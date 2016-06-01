import { Component, EventEmitter } from 'angular2/core';
import { KegListComponent } from './keg-list.component';
import { Keg } from './keg.model';

@Component({
  selector: 'my-app',
  directives: [KegListComponent],
  template: `
    <div class="container">
      <h1>Keg Tap List</h1>
      <keg-list
        [kegList]="kegs"
        (onKegSelect)="kegWasSelected($event)">
      </keg-list>
    </div>
  `
})
export class AppComponent {
  public kegs: Keg[];
  public onKegSelect: EventEmitter<Keg>;
  constructor(){
    this.kegs = [
      new Keg("Stella", "Imports", "$55", "12%", 0),
      new Keg("Rtella", "Imports", "$55", "12%", 1),
      new Keg("Mtella", "Imports", "$55", "12%", 2),
      new Keg("tella", "Imports", "$55", "12%", 3)

    ];
    console.log(this.kegs);
  }
  kegWasSelected(clickedKeg: Keg): void {
    console.log('parent', clickedKeg);
  }
}
