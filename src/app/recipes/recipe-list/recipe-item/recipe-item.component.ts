import { RecipeModel } from './../../../_models/recipe-model';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipeItem: RecipeModel;
  @Output() recipeSelected = new EventEmitter<void>();

  constructor() {

   }

  ngOnInit() {

  }
  onSelected() {
    this.recipeSelected.emit();
  }

}
