import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { finalize, mapTo, startWith, take } from 'rxjs/operators';
import { ArticlesService } from '../../../services/articles/articles.service';
import { IArticle } from '../../../services/articles/data/i-article';

@Component({
    selector: 'app-article-create-page',
    templateUrl: './article-create-page.component.html',
    styleUrls: ['./article-create-page.component.css']
})
export class ArticleCreatePageComponent {
    loading$: Observable<boolean>;

    constructor(
        public entitiesService: ArticlesService,
        public router: Router,
    ) {}


    onSubmit(data: IArticle): void {
        this.loading$ = this.entitiesService.createEntity$(data)
            .pipe(
                take(1),
                finalize(() => {
                    history.back();
                }),
                mapTo(false),
                startWith(true),
            );
    }

}
