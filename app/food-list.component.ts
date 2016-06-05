import { Component, EventEmitter } from 'angular2/core';
import { FoodComponent } from './food.component';
import { Food } from './food.model';
import { EditFoodDetailsComponent } from './edit-food-details.component';
import { NewFoodComponent } from './new-food.component';
// import {DonePipe} from './done.pipe';

@Component({
  selector: 'food-list',
  inputs: ['foodList'],
  outputs: ['onFoodSelect'],
  directives: [FoodComponent, EditFoodDetailsComponent, NewFoodComponent],
  template: `
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
  public filterDone: string = "notDone";
  constructor() {
    this.onFoodSelect = new EventEmitter();
  }
  foodClicked(clickedFood: Food): void {
    this.selectedFood = clickedFood;
    this.onFoodSelect.emit(clickedFood);

    console.log('child', this.selectedFood);
  }
  createFood(newFood): void {
    newFood.id = this.foodList.length;
    this.foodList.push(newFood);
  }
  onChange(filterOption) {
    this.filterDone = filterOption;
  }
}
