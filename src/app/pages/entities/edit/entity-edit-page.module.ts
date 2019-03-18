import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntityEditPageComponent } from './entity-edit-page.component';
import { LoadingModule } from '../../../components/loading/loading.module';

@NgModule({
    declarations: [EntityEditPageComponent],
    exports: [EntityEditPageComponent],
    imports: [
        CommonModule,
        LoadingModule,
    ],
})
export class EntityEditPageModule {}
