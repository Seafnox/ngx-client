import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryInfoComponent } from './gallery-info.component';
import { MatButtonModule, MatCardModule, MatIconModule } from '@angular/material';
import { LoadingModule } from '../../loading/loading.module';
import { NoImageModule } from '../../no-image/no-image.module';

@NgModule({
    imports: [
        CommonModule,
        MatCardModule,
        LoadingModule,
        MatButtonModule,
        MatIconModule,
        NoImageModule,
    ],
    declarations: [GalleryInfoComponent],
    exports: [GalleryInfoComponent],
})
export class GalleryInfoModule {}
