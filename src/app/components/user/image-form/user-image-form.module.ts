import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserImageFormComponent } from './user-image-form.component';
import { MaterialFileInputModule } from 'ngx-material-file-input';
import { MatButtonModule, MatCardModule, MatFormFieldModule, MatIconModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [UserImageFormComponent],
    imports: [
        CommonModule,
        MaterialFileInputModule,
        MatIconModule,
        MatFormFieldModule,
        ReactiveFormsModule,
        MatButtonModule,
        MatCardModule,
    ],
    exports: [
        UserImageFormComponent,
    ],
})
export class UserImageFormModule {}
