import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostEditPageComponent } from './post-edit-page.component';

@NgModule({
    declarations: [PostEditPageComponent],
    exports: [PostEditPageComponent],
    imports: [
        CommonModule,
    ],
})
export class PostEditPageModule {}
