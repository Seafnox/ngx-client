import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { finalize, mapTo, startWith, take } from 'rxjs/operators';
import { IArticle } from '../../../services/articles/data/i-article';
import { ArticlesService } from '../../../services/articles/articles.service';

@Component({
    selector: 'app-article-edit-page',
    templateUrl: './article-edit-page.component.html',
    styleUrls: ['./article-edit-page.component.css'],
})
export class ArticleEditPageComponent implements OnInit {
    loading$: Observable<boolean>;

    entity$: Observable<IArticle>;

    tabIndex = 0;

    constructor(
        public entityService: ArticlesService,
        public router: Router,
        public route: ActivatedRoute,
    ) {}

    ngOnInit(): void {
        this.entity$ = this.entityService.getFullEntity$(this.route.snapshot.params.id);
        this.tabIndex = this.route.snapshot.queryParams.index || 0;
    }

    onSubmit(data: IArticle): void {
        this.loading$ = this.entityService.updateEntity$(this.route.snapshot.params.id, data)
            .pipe(
                take(1),
                finalize(() => {
                    history.back();
                }),
                mapTo(false),
                startWith(true),
            );
    }

    onFileSubmit(file: File): void {
        this.loading$ = this.entityService.updateArticleImage$(this.route.snapshot.params.id, file)
            .pipe(
                take(1),
                finalize(() => {
                    history.back();
                }),
                mapTo(false),
                startWith(true),
            );
    }

    changeIndex(index: number): void {
        this.router.navigate([], {
            queryParams: {
                index,
            },
            relativeTo: this.route
        });
    }

    get formTitle(): string {
        return `Edit entity #${this.route.snapshot.params.id}`;
    }
}
