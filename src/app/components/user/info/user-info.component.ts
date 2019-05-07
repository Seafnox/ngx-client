import { Component, Input, OnInit } from '@angular/core';
import { IUser } from '../../../services/users/data/i-user';
import { Observable } from 'rxjs';
import { UsersService } from '../../../services/users/users.service';
import { ENDPOINTS } from '../../../endpoints/endpoints';
import { mapTo, startWith } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
    selector: 'app-user-info',
    templateUrl: './user-info.component.html',
    styleUrls: ['./user-info.component.css'],
})
export class UserInfoComponent implements OnInit {
    @Input() user: IUser;

    realUser$: Observable<IUser>;

    baseUrl = ENDPOINTS.BASE;

    destroying$: Observable<boolean>;

    constructor(
        private userService: UsersService,
        private router: Router,
    ) {}

    ngOnInit(): void {
        this.realUser$ = this.userService.getFullEntity$(this.user.id);
    }

    edit(id: string): void {
        this.router.navigate(['users', 'edit', id]);
    }

    destroy(id: string): void {
        this.destroying$ = this.userService.destroyEntity$(id)
            .pipe(
                mapTo(false),
                startWith(true),
            );
    }

}
