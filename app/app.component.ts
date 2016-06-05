import { Component, EventEmitter } from 'angular2/core';
import { FoodListComponent } from './food-list.component';
import { Food } from './food.model';

@Component({
  selector: 'my-app',
  directives: [FoodListComponent],
  template: `
    <div class="container">
      <div class="jumbotron">
        <h1>Food Tally List</h1>
      </div>
        <food-list
          [foodList]="foods"
          (onFoodSelect)="foodWasSelected($event)">
        </food-list>
    </div>
  `
})
export class AppComponent {
  public foods: Food[];
  public onFoodSelect: EventEmitter<Food>;
  constructor(){
    this.foods = [
      new Food("Apple", "Fresh Organic Fruit", "230", 0),
      new Food("Broccoli", "Fresh Veggies", "300", 1),
      new Food("Baked Beans", "Fresh Baked", "250", 2),


    ];
    console.log(this.foods);
  }
  foodWasSelected(clickedFood: Food): void {
    console.log('parent', clickedFood);
  }
}
