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
  postRating(brandRating: BrandRating): Observable<any>{
    return this.http
      .post<BrandRating>(this.urlRating, brandRating, this.httpOptions)
      .pipe(catchError(this.errorHandlerService.handleError<any>("post")));
  }

  updateRating(brandRating: BrandRating): Observable<any> {
    return this.http
      .put<BrandRating>(this.urlRating, brandRating, this.httpOptions)
      .pipe(catchError(this.errorHandlerService.handleError<any>("update")));
  }
  
  deleteRatings(name: string, country:string): Observable<any>{

    const url = `http://localhost:3000/brandsRatings/${name},${country}`;

    return this.http
    .delete<BrandRating>(this.url, this.httpOptions)
    .pipe(catchError(this.errorHandlerService.handleError<any>("delete")));

  }

  

}
