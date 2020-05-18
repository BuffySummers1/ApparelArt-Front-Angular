import { tap, catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ErrorService } from './error.service';
import { Observable } from 'rxjs';
import { Composition } from '../model/Composition';

import { environment as env } from '../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class CompositionService {

  constructor(private http: HttpClient, private errorService: ErrorService) { }

  // Get  All Compositions 
  getCompositions(): Observable<Composition[]> {
    return this.http.get<Composition[]>(env.apiUrl + 'compositions')
    .pipe(
      tap(data => data),
      catchError(this.errorService.handleError('getCompositions', []))
    );
  }

  

  // Get One Composition
  getCompositionDetail(id: number): Observable<Composition> {
    return this.http.get<any>(env.apiUrl + 'compositions/' + id)
    .pipe(
      tap(data => data),
      catchError(this.errorService.handleError('getComposition'))
    );
  }

  // POST 
  addComposition(composition: Composition): Observable<Composition> {
    return this.http.post<Composition>(env.apiUrl + 'compositions/add', composition, {responseType: 'json'})
    .pipe(
      tap((data: Composition) => console.log(data)),
      catchError(this.errorService.handleError<Composition>('addComposition'))
      );
  }

  // PUT 
  editComposition(composition: Composition, id: number): Observable<Composition> {
    return this.http.put<Composition>(env.apiUrl + 'compositions/edit/' + id, composition, {responseType: 'json'})
    .pipe(
      tap((data: Composition) => console.log(data)),
      catchError(this.errorService.handleError<Composition>('deleteComposition'))
      );
  }

      // DELETE
      deleteComposition(id: string): Observable<Composition> {
        const url = env.apiUrl + 'compositions/delete/' + id;
        return this.http.delete<any>(url)
          .pipe(
            tap(data => data),
            catchError(this.errorService.handleError('deleteComposition'))
          );
      }
}
