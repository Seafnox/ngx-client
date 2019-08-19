import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryFormComponent } from './gallery-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';

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
