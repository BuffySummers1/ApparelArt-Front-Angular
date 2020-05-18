import { tap, catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';

import { environment as env } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { ErrorService } from './error.service';
import { Observable } from 'rxjs';
import { Tag } from '../model/Tag';


@Injectable({
  providedIn: 'root'
})
export class TagService {

  constructor(private http: HttpClient, private errorService: ErrorService) { }

  // Get  All Tags 
  getTags(): Observable<Tag[]> {
    return this.http.get<Tag[]>(env.apiUrl + 'tags')
    .pipe(
      tap(data => data),
      catchError(this.errorService.handleError('getTags', []))
    );
  }

  

  // Get One Tag
  getTagDetail(id: number): Observable<Tag> {
    return this.http.get<any>(env.apiUrl + 'tags/' + id)
    .pipe(
      tap(data => data),
      catchError(this.errorService.handleError('getTag'))
    );
  }

  // POST 
  addTag(tag: Tag): Observable<Tag> {
    return this.http.post<Tag>(env.apiUrl + 'tags/add', tag, {responseType: 'json'})
    .pipe(
      tap((data: Tag) => console.log(data)),
      catchError(this.errorService.handleError<Tag>('addTag'))
      );
  }

  // PUT 
  editTag(tag: Tag, id: number): Observable<Tag> {
    return this.http.put<Tag>(env.apiUrl + 'tags/edit/' + id, tag, {responseType: 'json'})
    .pipe(
      tap((data: Tag) => console.log(data)),
      catchError(this.errorService.handleError<Tag>('deleteTag'))
      );
  }

      // DELETE
      deleteTag(id: string): Observable<Tag> {
        const url = env.apiUrl + 'tags/delete/' + id;
        return this.http.delete<any>(url)
          .pipe(
            tap(data => data),
            catchError(this.errorService.handleError('deleteTag'))
          );
      }
}


