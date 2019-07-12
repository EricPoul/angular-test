import { Component, OnDestroy, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';
import { UserInterface } from '../../../../shared/interfaces/user-interface';
import { ApiService } from '../../../../shared/services/api.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit, OnDestroy {

  displayedColumns = ['first_name', 'last_name', 'email'];
  userList: UserInterface[] = [];

  pagesCount: number;

  private $destroy = new Subject();

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private apiService: ApiService,
  ) {
  }

  ngOnInit() {
    this.activatedRoute.data.pipe(
      takeUntil(this.$destroy),
      )
      .subscribe(({ users, paginationInfo }) => {
        this.userList = users;
        this.pagesCount = paginationInfo.total;
        console.log(users, paginationInfo)
      });
  }

  ngOnDestroy(): void {
    this.$destroy.next();
    this.$destroy.complete();
  }

  pageChanged(event: PageEvent): void {
    let page: number = event.pageIndex + 1;
    this.apiService.fetchPaginationInfo(page).pipe(
      takeUntil(this.$destroy),
      )
      .subscribe(({ data, total }: {
        data: any[],
        total_pages: number,
        per_page: number,
        total: number,
        page: number,
      }) => {
        this.userList = data;
        this.pagesCount = total;
      });
  }

  userSelected(user: UserInterface): void {
    this.router.navigate(['./user', user.id]);
  }
}
