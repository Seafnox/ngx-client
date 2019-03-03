import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditorsPageComponent } from './editors-page.component';
import { EditorsModule } from '../../components/editors/editors.module';
import { EditorsPageRouting } from './editors-page.routing';

@NgModule({
    declarations: [EditorsPageComponent],
    imports: [
        CommonModule,
        EditorsModule,
        EditorsPageRouting,
    ],
})
export class EditorsPageModule {}
