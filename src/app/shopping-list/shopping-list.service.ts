import { IngredientModel } from './../_models/ingredient-model';
import { Injectable, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  // ingredientsChanged = new EventEmitter<IngredientModel[]>();
  ingredientsChanged = new Subject<IngredientModel[]>();
  ingredients: IngredientModel[] = [
    new IngredientModel('Apples', 5),
    new IngredientModel('Tomatoes', 10),
  ];

constructor() { }
  getIngredients() {
    return this.ingredients.slice();
  }
  addIngredient(ingredient: IngredientModel) {
    this.ingredients.push(ingredient);
    // this.ingredientsChanged.emit(this.ingredients.slice()); Not needed change from emitter to Subject
    this.ingredientsChanged.next(this.ingredients.slice());
  }
  addIngredients(ingredients: IngredientModel[]) {
    this.ingredients.push(...ingredients);
    this.ingredientsChanged.next(this.ingredients.slice());
  }
}
