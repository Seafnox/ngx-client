import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntityEditPageComponent } from './entity-edit-page.component';
import { EntityFormModule } from '../../../components/entity-form/entity-form.module';
import { ReactiveFormsModule } from '@angular/forms';
import { LoadingModule } from '../../../components/loading/loading.module';

@NgModule({
    declarations: [EntityEditPageComponent],
    imports: [
        CommonModule,
        EntityFormModule,
        LoadingModule,
        ReactiveFormsModule,
    ],
})
export class EntityEditPageModule {}
