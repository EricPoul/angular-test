import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class PaginationApiService {

  constructor(private http: HttpClient) {
  }

  //TODO: interface
  fetchPaginationInfo(id: number): Observable<unknown> {
    return this.http.get<any>(`/users?page=${id}`).pipe(map(response => {
      return {
        data: response.data,
        total_pages: response.total_pages,
        per_page: response.per_page,
        total: response.total,
        page: response.page,
      };
    }));
  }
}
