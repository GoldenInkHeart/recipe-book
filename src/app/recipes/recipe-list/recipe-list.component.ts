import { Component, OnInit ,EventEmitter, Output} from '@angular/core';
import {Recipe} from '../recipe';
//import { RecipeItemComponent } from './recipe-item.component';

@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']  
})
export class RecipeListComponent implements OnInit {

recipes: Recipe[]=[];
@Output() recipeSelected= new EventEmitter<Recipe>();
recipe = new Recipe('First Recipe','Test description','http://www.taste.com.au/images/recipes/tm/2014/09/cauliflower-mac-n-cheese-31088_h.jpeg');

 constructor() { }
  ngOnInit() {
  }

onSelected(recipe:Recipe){
  this.recipeSelected.emit(recipe);
}

}
