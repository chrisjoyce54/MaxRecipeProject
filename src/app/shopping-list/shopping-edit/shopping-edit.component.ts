import { IngredientModel } from './../../_models/ingredient-model';
import { Component, OnInit, ElementRef, ViewChild, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef;
  // ingrdientAdded: new EventEmitter<{name: string, amount: number}>();
  @Output() ingredientAdded = new EventEmitter<IngredientModel>();

  constructor() { }

  ngOnInit() {
  }

  onAddItem() {
    const newIngredient = new IngredientModel(
      this.nameInputRef.nativeElement.value,
      this.amountInputRef.nativeElement.value
        );
      this.ingredientAdded.emit(newIngredient);
  }
}
