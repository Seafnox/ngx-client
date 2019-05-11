import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ENDPOINTS } from '../../../endpoints/endpoints';
import { mapTo, startWith } from 'rxjs/operators';
import { Router } from '@angular/router';
import { ArticlesService } from '../../../services/articles/articles.service';
import { IArticle } from '../../../services/articles/data/i-article';

@Component({
    selector: 'app-article-info',
    templateUrl: './article-info.component.html',
    styleUrls: ['./article-info.component.css'],
})
export class ArticleInfoComponent implements OnInit {
    @Input() entity: IArticle;

    fullEntity$: Observable<IArticle>;

    baseUrl = ENDPOINTS.BASE;

    destroying$: Observable<boolean>;

    constructor(
        private entitiesService: ArticlesService,
        private router: Router,
    ) {}

    ngOnInit(): void {
        this.fullEntity$ = this.entitiesService.getFullEntity$(this.entity.id);
    }

    edit(id: string): void {
        this.router.navigate(['entities', 'edit', id]);
    }

    destroy(id: string): void {
        this.destroying$ = this.entitiesService.destroyEntity$(id)
            .pipe(
                mapTo(false),
                startWith(true),
            );
    }

}
