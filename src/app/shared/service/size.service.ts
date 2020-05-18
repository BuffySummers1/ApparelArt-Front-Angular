import { tap, catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';


import { environment as env } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { ErrorService } from './error.service';
import { Observable } from 'rxjs';
import { Size } from '../model/Size';


@Injectable({
  providedIn: 'root'
})
export class SizeService {

  constructor(private http: HttpClient, private errorService: ErrorService) { }

  // Get  All Sizes 
  getSizes(): Observable<Size[]> {
    return this.http.get<Size[]>(env.apiUrl + 'sizes')
    .pipe(
      tap(data => data),
      catchError(this.errorService.handleError('getSizes', []))
    );
  }

  

  // Get One Size
  getSizeDetail(id: number): Observable<Size> {
    return this.http.get<any>(env.apiUrl + 'sizes/' + id)
    .pipe(
      tap(data => data),
      catchError(this.errorService.handleError('getSize'))
    );
  }

  // POST 
  addSize(size: Size): Observable<Size> {
    return this.http.post<Size>(env.apiUrl + 'sizes/add', size, {responseType: 'json'})
    .pipe(
      tap((data: Size) => console.log(data)),
      catchError(this.errorService.handleError<Size>('addSize'))
      );
  }

  // PUT 
  editSize(size: Size, id: number): Observable<Size> {
    return this.http.put<Size>(env.apiUrl + 'sizes/edit/' + id, size, {responseType: 'json'})
    .pipe(
      tap((data: Size) => console.log(data)),
      catchError(this.errorService.handleError<Size>('deleteSize'))
      );
  }

      // DELETE
      deleteSize(id: string): Observable<Size> {
        const url = env.apiUrl + 'sizes/delete/' + id;
        return this.http.delete<any>(url)
          .pipe(
            tap(data => data),
            catchError(this.errorService.handleError('deleteSize'))
          );
      }
}
