import {Ingredient} from '../shared/ingredient.model';

export class Recipe {
  public name: string;
  public description: string;
  public imagePath: string;
  public id: number;
  public ingredients: Ingredient[ ];

  constructor(name: string, desc: string, imagePath: string, id: number, ingredients : Ingredient[]) {
    this.name = name;
    this.description = desc;
    this.imagePath = imagePath;
    this.ingredients = ingredients;
    this.id = id;
  }
}
