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

    constructor(
        public userService: UsersService,
        public router: Router,
        public route: ActivatedRoute,
    ) {}

    ngOnInit(): void {
        this.user$ = this.userService.getEntityFromData$(this.route.snapshot.params.id);
    }

    onSubmit(data: IUser): void {
        this.loading$ = this.userService.createEntity$(data)
            .pipe(
                take(1),
                finalize(() => {
                    history.back();
                }),
                mapTo(false),
                startWith(true),
            );
    }

    get formTitle(): string {
        return `Edit user #${this.route.snapshot.params.id}`;
    }
}
