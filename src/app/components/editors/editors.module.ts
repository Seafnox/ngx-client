import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditorsComponent } from './editors.component';
import { NgxEditorModule } from 'ngx-editor';
import { QuillModule } from 'ngx-quill';

@NgModule({
    imports: [
        CommonModule,
        NgxEditorModule,
        QuillModule,
    ],
    declarations: [EditorsComponent],
    exports: [EditorsComponent],
})
export class EditorsModule {}
