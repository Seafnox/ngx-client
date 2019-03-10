import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntityViewPageComponent } from './entity-view-page.component';
import { EntityFormModule } from '../../../components/entity-form/entity-form.module';
import { ReactiveFormsModule } from '@angular/forms';
import { LoadingModule } from '../../../components/loading/loading.module';

@NgModule({
    declarations: [EntityViewPageComponent],
    imports: [
        CommonModule,
        EntityFormModule,
        LoadingModule,
        ReactiveFormsModule,
    ],
})
export class EntityViewPageModule {}
