import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { IArticle } from '../../../services/articles/data/i-article';

@Component({
    selector: 'app-article-form',
    templateUrl: './article-form.component.html',
    styleUrls: ['./article-form.component.css'],
})
export class ArticleFormComponent implements OnInit {
    @Input() title: string;

    @Input() data: IArticle;

    @Output() readonly submitted = new EventEmitter<IArticle>();

    form: FormGroup;

    ngOnInit(): void {
        this.form = new FormGroup(this.formControls(this.data));
    }

    protected formControls(entity: IArticle): Partial<Record<keyof IArticle, AbstractControl>> {
        return {
            id: new FormControl(entity ? entity.id : null),
            preview: new FormControl(entity ? entity.preview : null),
            name: new FormControl(entity ? entity.description : '', Validators.required),
            shortDescription: new FormControl(entity ? entity.shortDescription : '', Validators.required),
            description: new FormControl(entity ? entity.description : '', Validators.required),
        };
    }
}
