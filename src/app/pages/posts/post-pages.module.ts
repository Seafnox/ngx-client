import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostPagesRouting } from './post-pages.routing';
import { PostListPageModule } from './list/post-list-page.module';
import { PostEditPageModule } from './edit/post-edit-page.module';
import { PostCreatePageModule } from './create/post-create-page.module';

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        PostPagesRouting,
        PostListPageModule,
        PostEditPageModule,
        PostCreatePageModule,
    ],
})
export class PostPagesModule {}
