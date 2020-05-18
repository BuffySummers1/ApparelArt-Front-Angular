import { tap, catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ErrorService } from './error.service';
import { Observable } from 'rxjs';
import { Shape } from '../model/Shape';

import { environment as env } from '../../../environments/environment';



@Injectable({
  providedIn: 'root'
})
export class ShapeService {

  constructor(private http: HttpClient, private errorService: ErrorService) { }

  // Get  All Shapes 
  getShapes(): Observable<Shape[]> {
    return this.http.get<Shape[]>(env.apiUrl + 'shapes')
    .pipe(
      tap(data => data),
      catchError(this.errorService.handleError('getShapes', []))
    );
  }

  

  // Get One Shape
  getShapeDetail(id: number): Observable<Shape> {
    return this.http.get<any>(env.apiUrl + 'shapes/' + id)
    .pipe(
      tap(data => data),
      catchError(this.errorService.handleError('getShape'))
    );
  }

  // POST 
  addShape(shape: Shape): Observable<Shape> {
    return this.http.post<Shape>(env.apiUrl + 'shapes/add', shape, {responseType: 'json'})
    .pipe(
      tap((data: Shape) => console.log(data)),
      catchError(this.errorService.handleError<Shape>('addShape'))
      );
  }

  // PUT 
  editShape(shape: Shape, id: number): Observable<Shape> {
    return this.http.put<Shape>(env.apiUrl + 'shapes/edit/' + id, shape, {responseType: 'json'})
    .pipe(
      tap((data: Shape) => console.log(data)),
      catchError(this.errorService.handleError<Shape>('deleteShape'))
      );
  }

      // DELETE
      deleteShape(id: string): Observable<Shape> {
        const url = env.apiUrl + 'shapes/delete/' + id;
        return this.http.delete<any>(url)
          .pipe(
            tap(data => data),
            catchError(this.errorService.handleError('deleteShape'))
          );
      }
}
