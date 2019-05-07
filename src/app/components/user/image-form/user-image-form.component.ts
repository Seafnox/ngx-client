import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IUser } from '../../../services/users/data/i-user';
import { FormControl, FormGroup } from '@angular/forms';
import { FileInput, FileValidator } from 'ngx-material-file-input';
import { ENDPOINTS } from '../../../endpoints/endpoints';

@Component({
    selector: 'app-user-image-form',
    templateUrl: './user-image-form.component.html',
    styleUrls: ['./user-image-form.component.css'],
})
export class UserImageFormComponent implements OnInit {
    @Input() data: IUser;

    @Output() readonly submitted = new EventEmitter<File>();

    maxSize = 1048576; // 10 MB

    form: FormGroup;

    baseUrl = ENDPOINTS.BASE;

    ngOnInit(): void {
        this.form = new FormGroup({
            file: new FormControl(undefined, FileValidator.maxContentSize(this.maxSize)),
        });
    }

    submit(fileInput: FileInput): void {
        console.log(fileInput ? fileInput.files : fileInput);
        this.submitted.emit(fileInput.files[0]);
    }
}
