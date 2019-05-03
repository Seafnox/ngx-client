import { Component } from '@angular/core';
import { IUser } from '../../../services/users/data/i-user';
import { UsersService } from '../../../services/users/users.service';
import { Observable } from 'rxjs';
import { finalize, mapTo, startWith, take } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
    selector: 'app-user-create-page',
    templateUrl: './user-create-page.component.html',
    styleUrls: ['./user-create-page.component.css'],
})
export class UserCreatePageComponent {
    loading$: Observable<boolean>;

    constructor(
        public userService: UsersService,
        public router: Router,
    ) {}


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
}
