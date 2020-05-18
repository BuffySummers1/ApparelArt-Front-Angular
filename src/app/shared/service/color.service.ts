import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import {throwError as observableThrowError,  Observable } from 'rxjs';
import { map, tap, catchError } from 'rxjs/operators';
import { Color } from '../model/Color';
import { ErrorService } from './error.service';

import { environment as env } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ColorService {

  constructor(private http: HttpClient, private errorService: ErrorService) { }

  // ** Get Colors
  getColors(): Observable<Color[]> {
    return this.http.get<Color[]>(env.apiUrl + 'colors')
    .pipe(
      tap(data => data),
      catchError(this.errorService.handleError('getColors', []))
    );
  }


  // ** Get Color
  getColorDetail(id: number): Observable<Color> {
    return this.http.get<any>(env.apiUrl + 'colors/' + id)
    .pipe(
      tap(data => data),
      catchError(this.errorService.handleError('getColor'))
    );
  }

  // POST :  Add a Color
  addColor(color: Color): Observable<Color> {
    return this.http.post<Color>(env.apiUrl + 'colors/add', color, {responseType: 'json'})
    .pipe(
      tap((data: Color) => console.log(data)),
      catchError(this.errorService.handleError<Color>('addColor'))
      );
  }

  // PUT :  Edit a Color
  editColor(color: Color, id: number): Observable<Color> {
    return this.http.put<Color>(env.apiUrl + 'colors/edit/' + id, color, {responseType: 'json'})
    .pipe(
      tap((data: Color) => console.log(data)),
      catchError(this.errorService.handleError<Color>('deleteColor'))
      );
  }

      /** DELETE: delete one Color */
      deleteColor(id: string): Observable<Color> {
        const url = env.apiUrl + 'categories/delete/' + id;
        return this.http.delete<any>(url)
          .pipe(
            tap(data => data),
            catchError(this.errorService.handleError('deleteColor'))
          );
      }
}
