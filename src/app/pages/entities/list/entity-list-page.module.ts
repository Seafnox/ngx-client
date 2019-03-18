import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntityListPageComponent } from './entity-list-page.component';
import { LoadingModule } from '../../../components/loading/loading.module';

@NgModule({
    declarations: [EntityListPageComponent],
    exports: [EntityListPageComponent],
    imports: [
        CommonModule,
        LoadingModule,
    ],
})
export class EntityListPageModule {}
