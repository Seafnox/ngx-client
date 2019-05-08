import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleCreatePageComponent } from './article-create-page.component';

@NgModule({
    exports: [ArticleCreatePageComponent],
    declarations: [ArticleCreatePageComponent],
    imports: [
        CommonModule,
    ],
})
export class ArticleCreatePageModule {}
