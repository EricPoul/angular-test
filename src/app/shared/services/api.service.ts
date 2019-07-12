import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { UserInterface, UserList } from '../interfaces/user-interface';
import { PaginationApiService } from './pagination-api.service';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private mainApi = '/users';

  constructor(private http: HttpClient, private paginationApiService: PaginationApiService) {
  }

  fetchUsers(page): Observable<UserInterface[]> {
    return this.http.get<UserList>(`${ this.mainApi }?page=${ page }`)
      .pipe(map(response => response.data));
  }

  fetchPaginationInfo(id: number): Observable<unknown> {
    return this.paginationApiService.fetchPaginationInfo(id);
  }

  fetchUserById(id: number): Observable<UserInterface> {
    return this.http.get<UserInterface>(`${ this.mainApi }/${ id }`).pipe(map(response => response));
  }
}


