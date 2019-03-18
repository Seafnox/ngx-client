import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../../services/users/users.service';
import { Observable } from 'rxjs';
import { IUser } from '../../../services/users/data/IUser';

@Component({
    selector: 'app-user-list',
    templateUrl: './user-list.component.html',
    styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements OnInit {
    userList$: Observable<IUser[]>;

    constructor(public userService: UsersService) {}

    ngOnInit(): void {
        this.userService.requestData();
        this.userList$ = this.userService.data$;
    }

    destroyUser(id: string): void {
        this.userService.destroyEntity$(id).subscribe();
    }
}
