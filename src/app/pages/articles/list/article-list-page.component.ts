import { Component, OnInit } from '@angular/core';
import { ArticlesService } from '../../../services/articles/articles.service';

@Component({
    selector: 'app-article-list-page',
    templateUrl: './article-list-page.component.html',
    styleUrls: ['./article-list-page.component.css'],
})
export class ArticleListPageComponent implements OnInit {
    constructor(public entitiesService: ArticlesService) {}

    ngOnInit(): void {
        this.entitiesService.requestData();
    }
}

