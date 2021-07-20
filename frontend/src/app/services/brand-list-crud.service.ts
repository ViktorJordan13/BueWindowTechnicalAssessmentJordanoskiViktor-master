import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { catchError, tap } from "rxjs/operators";

import { Brand } from "../models/Brand";
import { BrandRating } from '../models/BrandRating';
import { ErrorHandlerService } from './error-handler.service';

@Injectable({
  providedIn: 'root'
})
export class BrandListCrudService {

  private url = "http://localhost:3000/brands";
  private urlRating = "http://localhost:3000/brandsRatings";
  private urlS = "http://localhost:3000/brandsRatings/sort";

  httpOptions: { headers: HttpHeaders } = {
    headers: new HttpHeaders({ "Content-Type": "application/json" }),
  };

  constructor(private errorHandlerService: ErrorHandlerService, private http: HttpClient) { }

  fetchAll(): Observable <Brand[]> {

    return this.http
      .get<Brand[]>(this.url, { responseType: "json"})
      .pipe(
        tap((_) => console.log('fetched brands')),
        catchError(
            this.errorHandlerService.handleError<Brand[]>("fetchAll", [])
        )
      );

  }

  post(brand: Omit<Brand, "id">): Observable<any> {
    return this.http
      .post<Omit<Brand, "id">>(this.url, brand, this.httpOptions)
      .pipe(catchError(this.errorHandlerService.handleError<any>("post")));
  }

  update(brand: Brand): Observable<any> {
    return this.http
      .put<Brand>(this.url, brand, this.httpOptions)
      .pipe(catchError(this.errorHandlerService.handleError<any>("update")));
  }
  
  delete(id: number): Observable<any>{

    const url = `http://localhost:3000/brands/${id}`;

    return this.http
    .delete<Brand>(url, this.httpOptions)
    .pipe(catchError(this.errorHandlerService.handleError<any>("delete")));

  }

  fetchAllRatings(): Observable <BrandRating[]> {

    return this.http
      .get<BrandRating[]>(this.urlRating, { responseType: "json"})
      .pipe(
        tap((_) => console.log('fetched brandsRatings')),
        catchError(
            this.errorHandlerService.handleError<BrandRating[]>("fetchAllRatings", [])
        )
      );

  }
  postRating(brandRating: Omit<BrandRating, "id">): Observable<any> {
    return this.http
      .post<Omit<BrandRating, "id">>(this.urlRating, brandRating, this.httpOptions)
      .pipe(catchError(this.errorHandlerService.handleError<any>("post")));
  }

  updateRating(brandRating: BrandRating): Observable<any> {
    return this.http
      .put<BrandRating>(this.urlRating, brandRating, this.httpOptions)
      .pipe(catchError(this.errorHandlerService.handleError<any>("update")));
  }
  
  deleteRating(id: number): Observable<any>{

    const urlR = `http://localhost:3000/brandsRatings/${id}`;

    return this.http
    .delete<BrandRating>(urlR, this.httpOptions)
    .pipe(catchError(this.errorHandlerService.handleError<any>("delete")));

  }

  sortRatings(country: string): Observable <BrandRating[]> {


    return this.http
      .get<BrandRating[]>(this.urlS, { responseType: "json"})
      .pipe(
        tap((_) => console.log('fetched sorted brandsRatings')),
        catchError(
            this.errorHandlerService.handleError<BrandRating[]>("sort", [])
        )
      );

  }
  

}
