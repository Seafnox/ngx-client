import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UsersService } from '../../../services/users/users.service';
import { ActivatedRoute, Router } from '@angular/router';
import { IUser } from '../../../services/users/data/i-user';
import { finalize, mapTo, startWith, take } from 'rxjs/operators';

@Component({
    selector: 'app-user-edit-page',
    templateUrl: './user-edit-page.component.html',
    styleUrls: ['./user-edit-page.component.css'],
})
export class UserEditPageComponent implements OnInit {
    loading$: Observable<boolean>;

    user$: Observable<IUser>;

    tabIndex = 0;

    constructor(
        public userService: UsersService,
        public router: Router,
        public route: ActivatedRoute,
    ) {}

    ngOnInit(): void {
        this.user$ = this.userService.getFullEntity$(this.route.snapshot.params.id);
        this.tabIndex = this.route.snapshot.queryParams.index || 0;
    }

    onSubmit(data: IUser): void {
        this.loading$ = this.userService.updateEntity$(this.route.snapshot.params.id, data)
            .pipe(
                take(1),
                finalize(() => {
                    history.back();
                }),
                mapTo(false),
                startWith(true),
            );
    }

    onFileSubmit(file: File): void {
        this.loading$ = this.userService.updateUserImage$(this.route.snapshot.params.id, file)
            .pipe(
                take(1),
                finalize(() => {
                    history.back();
                }),
                mapTo(false),
                startWith(true),
            );
    }

    changeIndex(index: number): void {
        this.router.navigate([], {
            queryParams: {
                index,
            },
            relativeTo: this.route
        });
    }

    get formTitle(): string {
        return `Edit user #${this.route.snapshot.params.id}`;
    }
}
