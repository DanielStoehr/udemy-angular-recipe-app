import { Component, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss'],
})
export class RecipeDetailComponent {
  @Input() recipe: Recipe;

  constructor(private rs: RecipeService) {}

  onAddToShoppingList() {
    this.rs.addIngredientsToShoppingList(this.recipe.ingredients);
  }
}
