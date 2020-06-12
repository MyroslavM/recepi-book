import {EventEmitter, Injectable} from '@angular/core';

import {Recipe} from './recipe.model';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor(private shoppingListService: ShoppingListService) { }

  recipeSelect = new EventEmitter<Recipe>();

   private  recipes: Recipe[] = [
    new Recipe('A Test Recipe',
      'This is simply a test',
      'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',
      [
        new Ingredient('meat' , 1),
        new Ingredient('bread' , 2),
      ]),

    new Recipe('Another Test Recipe',
      'This is simply a test',
      'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',
      [
        new Ingredient('meat' , 1),
        new Ingredient('bread' , 3),
      ])
  ];

  getRecipe(){
    return this.recipes.slice();
  }

  addIngredientToShoppingList(ingredients : Ingredient[]){
    // console.log('add ingredient');
    this.shoppingListService.addIngredientsArrToShoppingList(ingredients);
  }
}
