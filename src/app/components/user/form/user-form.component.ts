import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { IUser } from '../../../services/users/data/i-user';

@Component({
    selector: 'app-user-form',
    templateUrl: './user-form.component.html',
    styleUrls: ['./user-form.component.css'],
})
export class UserFormComponent implements OnInit {
    @Input() title: string;

    @Input() data: IUser;

    @Output() readonly submitted = new EventEmitter<IUser>();

    form: FormGroup;

    ngOnInit(): void {
        this.form = new FormGroup(this.formControls(this.data));
    }

    protected formControls(user: IUser): Partial<Record<keyof IUser, AbstractControl>> {
        return {
            id: new FormControl(user ? user.id : null),
            filePath: new FormControl(user ? user.filePath : null),
            age: new FormControl(user ? user.age : '', Validators.required),
            firstName: new FormControl(user ? user.firstName : '', Validators.required),
            lastName: new FormControl(user ? user.lastName : '', Validators.required),
        };
    }
}
