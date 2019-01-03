import { ShoppingListService } from './shopping-list.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { IngredientModel } from '../_models/ingredient-model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: IngredientModel[];
  private subscription: Subscription;
  constructor(private slService: ShoppingListService) { }

  ngOnInit() {
    this.ingredients = this.slService.getIngredients();
    this.subscription = this.slService.ingredientsChanged
    .subscribe(
      (ingredients: IngredientModel[]) => {
        this.ingredients = ingredients;
      }
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  // onIngredientAdded(ingredient: IngredientModel) {
  //   this.ingredients.push(ingredient);
  // }
}
