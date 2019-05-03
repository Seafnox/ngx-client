import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IUser } from '../../../services/users/data/i-user';
import { UsersService } from '../../../services/users/users.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { mapTo, startWith } from 'rxjs/operators';

@Component({
    selector: 'app-user-list',
    templateUrl: './user-list.component.html',
    styleUrls: ['./user-list.component.css'],
})
export class UserListComponent {
    @Input() users: IUser[];

    @Input() selectedId: string;

    @Output() readonly selectedIdChange = new EventEmitter<string>();

    destroying$: Observable<boolean>;

    constructor(public userService: UsersService, public router: Router) {}

    select(id: string): void {
        console.log('select', id);

        if (this.selectedId === id) {
            return;
        }

        this.selectedId = id;
        this.selectedIdChange.emit(id);
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
