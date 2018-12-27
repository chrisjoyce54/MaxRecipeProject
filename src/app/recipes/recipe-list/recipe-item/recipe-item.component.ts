import { RecipeModel } from './../../../_models/recipe-model';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipeItem: RecipeModel;
  @Input() id: number;

  // constructor(private recipeService: RecipeService) {

  //  }

  ngOnInit() {
  }

  onSelected() {
    // this.recipeService.recipeSelected.emit(this.recipeItem);
  }

}
