import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleImageFormComponent } from './article-image-form.component';
import { MaterialFileInputModule } from 'ngx-material-file-input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import { NoImageModule } from '../../no-image/no-image.module';

@NgModule({
    declarations: [ArticleImageFormComponent],
    imports: [
        CommonModule,
        MaterialFileInputModule,
        MatIconModule,
        MatFormFieldModule,
        ReactiveFormsModule,
        MatButtonModule,
        MatCardModule,
        NoImageModule,
    ],
    exports: [
        ArticleImageFormComponent,
    ],
})
export class ArticleImageFormModule {}
