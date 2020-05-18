import { tap, catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';

import { environment as env } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { ErrorService } from './error.service';
import { Observable } from 'rxjs';
import { Product } from '../model/Product';



@Injectable({
  providedIn: 'root'
})
export class ProductService {

  
  constructor(private http: HttpClient, private errorService: ErrorService) { }

  // Get  All Products 
  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(env.apiUrl + 'products')
    .pipe(
      tap(data => data),
      catchError(this.errorService.handleError('getProducts', []))
    );
  }

  

  // Get One Product
  getProductDetail(id: number): Observable<Product> {
    return this.http.get<any>(env.apiUrl + 'products/' + id)
    .pipe(
      tap(data => data),
      catchError(this.errorService.handleError('getProduct'))
    );
  }

  // POST 
  addProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(env.apiUrl + 'products/add', product, {responseType: 'json'})
    .pipe(
      tap((data: Product) => console.log(data)),
      catchError(this.errorService.handleError<Product>('addProduct'))
      );
  }

  // PUT 
  editProduct(product: Product, id: number): Observable<Product> {
    return this.http.put<Product>(env.apiUrl + 'products/edit/' + id, product, {responseType: 'json'})
    .pipe(
      tap((data: Product) => console.log(data)),
      catchError(this.errorService.handleError<Product>('deleteProduct'))
      );
  }

      // DELETE
      deleteProduct(id: string): Observable<Product> {
        const url = env.apiUrl + 'products/delete/' + id;
        return this.http.delete<any>(url)
          .pipe(
            tap(data => data),
            catchError(this.errorService.handleError('deleteProduct'))
          );
      }
}
