import {Pipe, PipeTransform} from 'angular2/core';
import {Food} from './food.model';

@Pipe({
  name: "calorie",
  pure: false
})

export class CaloriePipe implements PipeTransform {
  transform(input: Food[], args) {
    var calorieCount = args[0];
    if(calorieCount === "Low Calorie") {
      return input.filter((food) => {
        return food.calories < 500;
      });
    } else if (calorieCount === "High Calorie") {
      return input.filter((food) => {
        return food.calories >= 500;
      });
    }else {
      return input;
    }
  }
}
