import {EventEmitter, Injectable} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  private selectIngredientIndex?: number = null;

  constructor() {
  }

  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
    new Ingredient('Potato', 10),
  ];

  ingredientChanged = new EventEmitter<Ingredient[]>();
  ingredientClean = new EventEmitter();
  ingredientDelete = new EventEmitter<Ingredient[]>();

  getIngredients() {
    return this.ingredients.slice();
  }

  onIngredientAdded(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientChanged.emit(this.ingredients.slice());
  }

  onIngredientClean() {
    this.ingredientClean.emit(this.ingredients = []);
  }

  public selectItem(index: number) {
    this.selectIngredientIndex = index;
  }

  onIngredientDelete() {
    if (this.selectIngredientIndex !== null) {
      this.ingredients.splice(this.selectIngredientIndex, 1);
      this.selectIngredientIndex = null;
      this.ingredientDelete.emit(this.ingredients.slice())
    }

  }


  addIngredientsArrToShoppingList(ingredients: Ingredient[]) {
    // for (let ingredient of ingredients){
    //   this.addIngredientsArrToShoppingList(ingredient);
    // }
    this.ingredients.push(...ingredients);
    this.ingredientChanged.emit(this.ingredients.slice());
  }

}
