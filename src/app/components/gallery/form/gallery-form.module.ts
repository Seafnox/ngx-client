import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryFormComponent } from './gallery-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatCardModule, MatInputModule } from '@angular/material';

@NgModule({
    declarations: [GalleryFormComponent],
    exports: [GalleryFormComponent],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        MatCardModule,
        MatInputModule,
        MatButtonModule,
    ],
})
export class GalleryFormModule {}
