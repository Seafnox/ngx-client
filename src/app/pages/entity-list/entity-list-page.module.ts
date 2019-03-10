import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntityListPageComponent } from './entity-list-page.component';
import { EntityListModule } from '../../components/entity-list/entity-list.module';
import { LoadingModule } from '../../components/loading/loading.module';

@NgModule({
    declarations: [EntityListPageComponent],
    imports: [
        CommonModule,
        EntityListModule,
        LoadingModule,
    ],
})
export class EntityListPageModule {}
