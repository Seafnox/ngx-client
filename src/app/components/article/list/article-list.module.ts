import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleListComponent } from './article-list.component';
import { MatButtonModule, MatExpansionModule, MatIconModule, MatToolbarModule } from '@angular/material';
import { ArticleInfoModule } from '../info/article-info.module';
import { LoadingModule } from '../../loading/loading.module';

@NgModule({
    imports: [
        CommonModule,
        MatToolbarModule,
        MatButtonModule,
        MatIconModule,
        MatExpansionModule,
        ArticleInfoModule,
        LoadingModule,
    ],
    declarations: [ArticleListComponent],
    exports: [ArticleListComponent],
})
export class ArticleListModule {}
