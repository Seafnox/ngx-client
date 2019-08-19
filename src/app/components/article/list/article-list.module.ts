import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleListComponent } from './article-list.component';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
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
