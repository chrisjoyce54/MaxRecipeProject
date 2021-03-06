import { Component, OnInit } from '@angular/core';
import { RecipeModel } from '../_models/recipe-model';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  // selectedRecipe: RecipeModel;

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    // No longer needed we removed emitter
    // this.recipeService.recipeSelected
    //   .subscribe(
    //     (recipe: RecipeModel) => {
    //     this.selectedRecipe = recipe;
    //   }
    //   );
  }

}
