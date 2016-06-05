import { Component } from 'angular2/core';
import { Food } from './food.model';
/// <reference path="jquery.d.ts" />;

@Component({
    selector: 'food-display',
    inputs: ['food'],
  template: `
  <div>
  <div id="foodContainer" class="container">
    <input type="button" (click)="servePint()"/>
    <label>{{ food.name }} <br> Description: {{ food.description }} <br> Calories: {{ food.calories }}</label>
    <div id="progressContainer" class="container">
      <div class="">
        <div id="{{ food.name }}" class="" role="" aria-valuenow="" aria-valuemin="" aria-valuemax="" style="">
        </div>
      </div>
    </div>
  </div>
</div>
  `
})
export class FoodComponent {
  public food: Food;


}
