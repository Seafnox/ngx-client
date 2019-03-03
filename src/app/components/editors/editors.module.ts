import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditorsComponent } from './editors.component';
import { ReactiveFormsModule } from '@angular/forms';
import { QuillModule } from 'ngx-quill';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        QuillModule.forRoot(),
    ],
    declarations: [EditorsComponent],
    exports: [EditorsComponent],
})
export class EditorsModule {}
