import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { mapTo, startWith } from 'rxjs/operators';
import { ArticlesService } from '../../../services/articles/articles.service';
import { IArticle } from '../../../services/articles/data/i-article';

@Component({
    selector: 'app-article-list',
    templateUrl: './article-list.component.html',
    styleUrls: ['./article-list.component.css'],
})
export class ArticleListComponent {
    @Input() entities: IArticle[];

    @Input() selectedId: string;

    @Output() readonly selectedIdChange = new EventEmitter<string>();

    destroying$: Observable<boolean>;

    constructor(public entitiesService: ArticlesService, public router: Router) {}

    select(id: string): void {
        if (this.selectedId === id) {
            return;
        }

        this.selectedId = id;
        this.selectedIdChange.emit(id);
    }

    edit(id: string): void {
        this.router.navigate(['articles', 'edit', id]);
    }

    editImage(id: string): void {
        this.router.navigate(['articles', 'edit', id], {
            queryParams: {
                index: 1,
            }
        });
    }

    destroy(id: string): void {
        this.destroying$ = this.entitiesService.destroyEntity$(id)
            .pipe(
                mapTo(false),
                startWith(true),
            );
    }
}
