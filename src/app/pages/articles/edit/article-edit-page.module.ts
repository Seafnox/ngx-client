import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleEditPageComponent } from './article-edit-page.component';
import { LoadingModule } from '../../../components/loading/loading.module';
import { ArticleFormModule } from '../../../components/article/form/article-form.module';
import { MatTabsModule } from '@angular/material/tabs';
import { ArticleImageFormModule } from '../../../components/article/image-form/article-image-form.module';

@NgModule({
    declarations: [ArticleEditPageComponent],
    exports: [ArticleEditPageComponent],
    imports: [
        CommonModule,
        LoadingModule,
        ArticleFormModule,
        MatTabsModule,
        ArticleImageFormModule,
    ],
})
export class ArticleEditPageModule {}
