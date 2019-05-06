import { Component, Input, OnInit } from '@angular/core';
import { IUser } from '../../../services/users/data/i-user';
import { Observable } from 'rxjs';
import { UsersService } from '../../../services/users/users.service';

@Component({
    selector: 'app-user-info',
    templateUrl: './user-info.component.html',
    styleUrls: ['./user-info.component.css'],
})
export class UserInfoComponent implements OnInit {
    @Input() user: IUser;

    realUser$: Observable<IUser>;

    constructor(
        private userService: UsersService,
    ) {}

    ngOnInit(): void {
        this.realUser$ = this.userService.getFullEntity$(this.user.id);
    }
}
