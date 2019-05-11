import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryListComponent } from './gallery-list.component';
import { MatButtonModule, MatExpansionModule, MatIconModule, MatToolbarModule } from '@angular/material';
import { GalleryInfoModule } from '../info/gallery-info.module';
import { LoadingModule } from '../../loading/loading.module';

@NgModule({
    imports: [
        CommonModule,
        MatToolbarModule,
        MatButtonModule,
        MatIconModule,
        MatExpansionModule,
        GalleryInfoModule,
        LoadingModule,
    ],
    declarations: [GalleryListComponent],
    exports: [GalleryListComponent],
})
export class GalleryListModule {}
