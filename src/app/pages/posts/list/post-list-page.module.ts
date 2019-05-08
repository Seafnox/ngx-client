import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostListPageComponent } from './post-list-page.component';

@NgModule({
    declarations: [PostListPageComponent],
    exports: [PostListPageComponent],
    imports: [
        CommonModule,
    ],
})
export class PostListPageModule {}
