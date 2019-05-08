import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleListPageComponent } from './article-list-page.component';

@NgModule({
    declarations: [ArticleListPageComponent],
    exports: [ArticleListPageComponent],
    imports: [
        CommonModule,
    ],
})
export class ArticleListPageModule {}
