import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleInfoComponent } from './article-info.component';
import { MatButtonModule, MatCardModule, MatIconModule } from '@angular/material';
import { LoadingModule } from '../../loading/loading.module';
import { NoImageModule } from '../../no-image/no-image.module';

@NgModule({
    imports: [
        CommonModule,
        MatCardModule,
        LoadingModule,
        MatButtonModule,
        MatIconModule,
        NoImageModule,
    ],
    declarations: [ArticleInfoComponent],
    exports: [ArticleInfoComponent],
})
export class ArticleInfoModule {}
