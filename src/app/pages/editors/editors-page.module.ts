import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditorsPageComponent } from './editors-page.component';
import { EditorsModule } from '../../components/editors/editors.module';
import { EditorsPageRouting } from './editors-page.routing';
import { NotFoundPageModule } from '../not-found/not-found-page.module';

@NgModule({
    declarations: [EditorsPageComponent],
    imports: [
        CommonModule,
        EditorsModule,
        EditorsPageRouting,
        NotFoundPageModule,
    ],
})
export class EditorsPageModule {}
