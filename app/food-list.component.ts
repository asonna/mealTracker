import { Component, EventEmitter } from 'angular2/core';
import { FoodComponent } from './food.component';
import { Food } from './food.model';
import { EditFoodDetailsComponent } from './edit-food-details.component';
import { NewFoodComponent } from './new-food.component';
import {CaloriePipe} from './calorie.pipe';


@Component({
  selector: 'food-list',
  inputs: ['foodList'],
  outputs: ['onFoodSelect'],
  pipes: [CaloriePipe],
  directives: [FoodComponent, EditFoodDetailsComponent, NewFoodComponent],
  template: `
    <select (change)="onChangeCalorie($event.target.value)" class="filter">
      <option value="lowCalorie">Show low calorie foods</option>
      <option value="highCalorie">Show all high calorie foods</option>
      <option value="all" selected="selected">Show all</option>
    </select>
  <food-display *ngFor="#currentFood of foodList"
    (click)="foodClicked(currentFood)"
    [class.selected]="currentFood === selectedFood"
    [food]="currentFood">
  </food-display>
  <edit-food-details *ngIf="selectedFood" [food]="selectedFood">
  </edit-food-details>
  <new-food (onSubmitNewFood)="createFood($event)" ></new-food>
  `
})
export class FoodListComponent {
  public foodList: Food[];
  public onFoodSelect: EventEmitter<Food>;
  public selectedFood: Food;
  public filterCalorie: string ="all";
  constructor() {
    this.onFoodSelect = new EventEmitter();
  }
  foodClicked(clickedFood: Food): void {
    this.selectedFood = clickedFood;
    this.onFoodSelect.emit(clickedFood);
  }
  createFood(newFood: Food): void {
    newFood.id = this.foodList.length;
    this.foodList.push(newFood);
  }
  onChangeCalorie(filterOption) {
    this.filterCalorie = filterOption;
  }
  getCalories(): number {
  var totalCalories: number = 0;
  this.foodList.forEach(function(food){
    totalCalories += food.calories;
  });
  return totalCalories;
  }
}
