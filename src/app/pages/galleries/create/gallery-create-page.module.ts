import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryCreatePageComponent } from './gallery-create-page.component';

@NgModule({
    exports: [GalleryCreatePageComponent],
    declarations: [GalleryCreatePageComponent],
    imports: [
        CommonModule,
    ],
})
export class GalleryCreatePageModule {}
