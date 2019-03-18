import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntityCreatePageComponent } from './entity-create-page.component';
import { LoadingModule } from '../../../components/loading/loading.module';

@NgModule({
    declarations: [EntityCreatePageComponent],
    exports: [EntityCreatePageComponent],
    imports: [
        CommonModule,
        LoadingModule,
    ],
})
export class EntityCreatePageModule {}
