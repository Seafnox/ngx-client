import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../../services/users/users.service';

@Component({
    selector: 'app-user-list-page',
    templateUrl: './user-list-page.component.html',
    styleUrls: ['./user-list-page.component.css'],
})
export class UserListPageComponent implements OnInit {
    constructor(public usersService: UsersService) {}

    ngOnInit(): void {
        this.usersService.requestData();
    }
}
