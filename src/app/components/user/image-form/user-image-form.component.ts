import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IUser } from '../../../services/users/data/i-user';
import { FormControl, FormGroup } from '@angular/forms';
import { FileInput, FileValidator } from 'ngx-material-file-input';
import { ENDPOINTS } from '../../../endpoints/endpoints';
import { fromEvent, Observable, of } from 'rxjs';
import { map, startWith, switchMap } from 'rxjs/operators';

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

    currentFile$: Observable<string | ArrayBuffer>;

    baseUrl = ENDPOINTS.BASE;

    ngOnInit(): void {
        this.form = new FormGroup({
            file: new FormControl(undefined, FileValidator.maxContentSize(this.maxSize)),
        });

        this.currentFile$ = this.form.get('file').valueChanges
            .pipe(
                startWith(this.form.get('file').value),
                map((fileInput: FileInput) => fileInput ? fileInput.files[0] : null),
                switchMap((file) => {
                    if (!file) {
                        return of(null);
                    }

                    const reader = new FileReader();

                    setTimeout(() => reader.readAsDataURL(file));

                    return fromEvent<ProgressEvent>(reader, 'load');
                }),
                map((event: ProgressEvent) => event ? (event.target as FileReader).result : null),
            );
    }

    submit(fileInput: FileInput): void {
        this.submitted.emit(fileInput ? fileInput.files[0] : null);
    }
}
