import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { BrandListCrudService } from 'src/app/services/brand-list-crud.service';

import { Brand } from 'src/app/models/Brand';

import { BrandRating } from 'src/app/models/BrandRating';

import {tap} from 'rxjs/operators';


@Component({
  selector: 'app-brand-list',
  templateUrl: './brand-list.component.html',
  styleUrls: ['./brand-list.component.scss']
})
export class BrandListComponent implements OnInit {

  brands$!: Observable<Brand[]>
  brandsRatings$!: Observable<BrandRating[]>

  constructor(private brandListCrudService: BrandListCrudService) { }

  ngOnInit(): void {
    this.brands$ = this.fetchAll();
    this.brandsRatings$ = this.fetchAllRatings();
  }

  fetchAll(): Observable <Brand[]>{
      return this.brandListCrudService.fetchAll();
  }

  post(brandName: ThisType<Brand>, brandDescription: ThisType<Brand>,): void{

      const name = (<string>brandName).trim();
      const description = (<string>brandDescription).trim();
      if(!name) return;
      //console.log(name);
      //console.log(description);
      this.brands$ = this.brandListCrudService
      .post({ name, description})
      .pipe(tap((_) => (this.brands$ = this.fetchAll())));
  }
    
  update(id:number, brandName: ThisType<Brand>, brandDescription: ThisType<Brand>): void{

    const name = (<string>brandName).trim();
    const description = (<string>brandDescription).trim();
    if(!name) return;

    const newBrand: Brand = {
      id,
      name,
      description
    }
    this.brands$ = this.brandListCrudService
      .update(newBrand)
      .pipe(tap((_) => (this.brands$ = this.fetchAll())));
  }

  delete(id: number): void{

    this.brands$ = this.brandListCrudService
      .delete(id)
      .pipe(tap((_) => (this.brands$ = this.fetchAll())));
  }

  fetchAllRatings(): Observable <BrandRating[]>{
    return this.brandListCrudService.fetchAllRatings();
}

postRatings(brandRatingName: ThisType<BrandRating>, brandRatingCountry: ThisType<BrandRating>, brandRatingRating: ThisType<BrandRating>): void{

  const name = (<string>brandRatingName).trim();
  const country = (<string>brandRatingCountry).trim();
  const rating = (<number>brandRatingRating);
  if(!name) return;
  //console.log(name);
  //console.log(description);
  this.brandsRatings$ = this.brandListCrudService
  .postRating({ name, country, rating})
  .pipe(tap((_) => (this.brandsRatings$ = this.fetchAllRatings())));
}

updateRatings(brandRatingName: ThisType<BrandRating>, brandRatingCountry: ThisType<BrandRating>, brandRatingRating: ThisType<BrandRating>): void{

  const name = (<string>brandRatingName).trim();
  const country = (<string>brandRatingCountry).trim();
  const rating = (<number>brandRatingRating);
  if(!name) return;

  const newBrandRating: BrandRating = {
    name,
    country,
    rating
  }
  this.brandsRatings$ = this.brandListCrudService
    .updateRating(newBrandRating)
    .pipe(tap((_) => (this.brandsRatings$ = this.fetchAllRatings())));
}

deleteRatings(name: string, country:string): void{

  this.brandsRatings$ = this.brandListCrudService
    .deleteRatings(name, country)
    .pipe(tap((_) => (this.brandsRatings$ = this.fetchAllRatings())));
}
  
}
