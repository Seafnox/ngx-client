import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleListPageComponent } from './article-list-page.component';
import { ArticleListModule } from '../../../components/article/list/article-list.module';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { LoadingModule } from '../../../components/loading/loading.module';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [ArticleListPageComponent],
    exports: [ArticleListPageComponent],
    imports: [
        CommonModule,
        ArticleListModule,
        MatToolbarModule,
        LoadingModule,
        MatButtonModule,
        RouterModule,
    ],
})
export class ArticleListPageModule {}
