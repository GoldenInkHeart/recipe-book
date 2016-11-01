import { Component, OnInit } from '@angular/core';
import {Recipe} from './Recipe';
//import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';

@Component({
  selector: 'rb-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
selectedRecipe:Recipe
  constructor() { }

  ngOnInit() {
  }

}
