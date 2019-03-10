import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntityInfoPageComponent } from './entity-info-page.component';
import { LoadingModule } from '../../../components/loading/loading.module';

@NgModule({
    declarations: [EntityInfoPageComponent],
    imports: [
        CommonModule,
        LoadingModule,
    ],
})
export class EntityInfoPageModule {}
