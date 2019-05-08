import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryEditPageComponent } from './gallery-edit-page.component';

@NgModule({
    declarations: [GalleryEditPageComponent],
    exports: [GalleryEditPageComponent],
    imports: [
        CommonModule,
    ],
})
export class GalleryEditPageModule {}
