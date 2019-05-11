import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FileInput, FileValidator } from 'ngx-material-file-input';
import { ENDPOINTS } from '../../../endpoints/endpoints';
import { fromEvent, Observable, of } from 'rxjs';
import { map, startWith, switchMap } from 'rxjs/operators';
import { IArticle } from '../../../services/articles/data/i-article';

@Component({
    selector: 'app-article-image-form',
    templateUrl: './article-image-form.component.html',
    styleUrls: ['./article-image-form.component.css'],
})
export class ArticleImageFormComponent implements OnInit {
    @Input() data: IArticle;

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
