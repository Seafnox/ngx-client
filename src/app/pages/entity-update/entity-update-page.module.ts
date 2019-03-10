import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntityUpdatePageComponent } from './entity-update-page.component';
import { EntityFormModule } from '../../components/entity-form/entity-form.module';
import { ReactiveFormsModule } from '@angular/forms';
import { LoadingModule } from '../../components/loading/loading.module';

@NgModule({
    declarations: [EntityUpdatePageComponent],
    imports: [
        CommonModule,
        EntityFormModule,
        LoadingModule,
        ReactiveFormsModule,
    ],
})
export class EntityUpdatePageModule {}
