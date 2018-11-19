import { Component, OnInit } from '@angular/core';
import { RecipeModel } from '../../_models/recipe-model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: RecipeModel[] = [
    new RecipeModel('A Test Recipe', 'this is simply a test', 'https://unsplash.com/photos/sHCAlf-xA5U' )
  ];

  constructor() { }

  ngOnInit() {
  }

}
