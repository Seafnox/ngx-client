import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { IUser } from '../../../services/users/data/i-user';

@Component({
    selector: 'app-user-form',
    templateUrl: './user-form.component.html',
    styleUrls: ['./user-form.component.css'],
})
export class UserFormComponent implements OnInit {
    @Input() form: FormGroup;

    @Output() readonly submitted = new EventEmitter<IUser>();

    ngOnInit(): void {
        this.form = new FormGroup(this.formControls());
    }

    protected formControls(): Partial<Record<keyof IUser, AbstractControl>> {
        return {
            age: new FormControl('', Validators.required),
            firstName: new FormControl('', Validators.required),
            lastName: new FormControl('', Validators.required),
        };
    }
}
