import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IUser } from '../../../services/users/data/i-user';

@Component({
    selector: 'app-user-list',
    templateUrl: './user-list.component.html',
    styleUrls: ['./user-list.component.css'],
})
export class UserListComponent {
    @Input() users: IUser[];

    @Input() selectedId: string;

    @Output() readonly selectedIdChange = new EventEmitter<string>();
}
