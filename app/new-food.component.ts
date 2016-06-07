import { Component, EventEmitter } from 'angular2/core';
import { FoodListComponent } from './food-list.component';
import { Food } from './food.model';

@Component({
  selector: 'new-food',
  outputs: ['onSubmitNewFood'],
  template: `
  <div class="food-form">
    <h3>Create Food Item:</h3>
    <input placeholder="Name" class="col-sm-8 input-lg" #newName>
    <input placeholder="Description" class="col-sm-8 input-lg" #newDescription>
    <input placeholder="Calories" class="col-sm-8 input-lg" #newCalories>
    <button (click)="addFood(newName, newDescription, newCalories)" class="btn-success btn-lg add-button">Add</button>
  </div>
  `
})
export class NewFoodComponent {
  public onSubmitNewFood: EventEmitter<Food>;
  constructor(){
    this.onSubmitNewFood = new EventEmitter();
  }
  addFood(foodName: HTMLInputElement, foodDescription: HTMLInputElement, foodCalories: HTMLInputElement){
    var newFood = new Food(foodName.value, foodDescription.value, parseInt(foodCalories.value), 0);
    this.onSubmitNewFood.emit(newFood);
    foodName.value = "";
  }
}
