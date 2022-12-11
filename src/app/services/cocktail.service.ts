import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cocktail } from '../models/cocktail.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CocktailService {

  constructor(
    public http: HttpClient
  ) { }

  public getCocktails() : Observable<Cocktail[]> {
    return this.http.get<Cocktail[]>("assets/cocktails.json");
  }

}
