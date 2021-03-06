import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticlePagesRoutingModule } from './article-pages-routing.module';
import { ArticleListPageModule } from './list/article-list-page.module';
import { ArticleEditPageModule } from './edit/article-edit-page.module';
import { ArticleCreatePageModule } from './create/article-create-page.module';
import { NotFoundPageModule } from '../not-found/not-found-page.module';

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        ArticlePagesRoutingModule,
        ArticleListPageModule,
        ArticleEditPageModule,
        ArticleCreatePageModule,
        NotFoundPageModule,
    ],
})
export class ArticlePagesModule {}
