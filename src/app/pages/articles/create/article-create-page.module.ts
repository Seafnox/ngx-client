import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleCreatePageComponent } from './article-create-page.component';
import { LoadingModule } from '../../../components/loading/loading.module';
import { ArticleFormModule } from '../../../components/article/form/article-form.module';

@NgModule({
    exports: [ArticleCreatePageComponent],
    declarations: [ArticleCreatePageComponent],
    imports: [
        CommonModule,
        LoadingModule,
        ArticleFormModule,
    ],
})
export class ArticleCreatePageModule {}
