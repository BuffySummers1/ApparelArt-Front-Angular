import { Injectable } from '@angular/core';

import { environment as env } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { ErrorService } from './error.service';
import { Observable } from 'rxjs';
import { Gender } from '../model/Gender';
import { catchError, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class GenderService {

  constructor(private http: HttpClient, private errorService: ErrorService) { }

  // Get  All Genders 
  getGenders(): Observable<Gender[]> {
    return this.http.get<Gender[]>(env.apiUrl + 'genders')
    .pipe(
      tap(data => data),
      catchError(this.errorService.handleError('getGenders', []))
    );
  }

  

  // Get One Gender
  getGenderDetail(id: number): Observable<Gender> {
    return this.http.get<any>(env.apiUrl + 'genders/' + id)
    .pipe(
      tap(data => data),
      catchError(this.errorService.handleError('getGender'))
    );
  }

  // POST 
  addGender(gender: Gender): Observable<Gender> {
    return this.http.post<Gender>(env.apiUrl + 'genders/add', gender, {responseType: 'json'})
    .pipe(
      tap((data: Gender) => console.log(data)),
      catchError(this.errorService.handleError<Gender>('addGender'))
      );
  }

  // PUT 
  editGender(gender: Gender, id: number): Observable<Gender> {
    return this.http.put<Gender>(env.apiUrl + 'genders/edit/' + id, gender, {responseType: 'json'})
    .pipe(
      tap((data: Gender) => console.log(data)),
      catchError(this.errorService.handleError<Gender>('deleteGender'))
      );
  }

      // DELETE
      deleteGender(id: string): Observable<Gender> {
        const url = env.apiUrl + 'genders/delete/' + id;
        return this.http.delete<any>(url)
          .pipe(
            tap(data => data),
            catchError(this.errorService.handleError('deleteGender'))
          );
      }
}
