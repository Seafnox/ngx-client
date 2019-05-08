import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostCreatePageComponent } from './post-create-page.component';

@NgModule({
    exports: [PostCreatePageComponent],
    declarations: [PostCreatePageComponent],
    imports: [
        CommonModule,
    ],
})
export class PostCreatePageModule {}
