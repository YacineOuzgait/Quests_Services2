import { Component, OnInit } from '@angular/core';

import { Cocktail } from '../models/cocktail.model';
import { CocktailService } from '../services/cocktail.service';

@Component({
  selector: 'app-cocktail-list',
  templateUrl: './cocktail-list.component.html',
  styleUrls: ['./cocktail-list.component.css']
})
export class CocktailListComponent implements OnInit {

  cocktails: Cocktail[]= [];

  constructor(
    public cocktailService: CocktailService
  ) { }

  ngOnInit() {
    this.cocktailService.getCocktails().subscribe(cocktailsFromJsonFile => {
      this.cocktails = cocktailsFromJsonFile
    })
  }
}
