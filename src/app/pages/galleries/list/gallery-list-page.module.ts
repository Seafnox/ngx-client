import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryListPageComponent } from './gallery-list-page.component';

@NgModule({
    declarations: [GalleryListPageComponent],
    exports: [GalleryListPageComponent],
    imports: [
        CommonModule,
    ],
})
export class GalleryListPageModule {}
