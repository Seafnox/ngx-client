import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleEditPageComponent } from './article-edit-page.component';

@NgModule({
    declarations: [ArticleEditPageComponent],
    exports: [ArticleEditPageComponent],
    imports: [
        CommonModule,
    ],
})
export class ArticleEditPageModule {}
