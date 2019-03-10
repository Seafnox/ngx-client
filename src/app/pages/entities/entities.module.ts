import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundPageModule } from '../not-found/not-found-page.module';
import { EntitiesRouting } from './entities.routing';
import { EntityListPageModule } from './list/entity-list-page.module';
import { EntityCreatePageModule } from './create/entity-create-page.module';
import { EntityEditPageModule } from './edit/entity-edit-page.module';
import { EntityInfoPageModule } from './info/entity-info-page.module';

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        EntitiesRouting,
        NotFoundPageModule,
        EntityListPageModule,
        EntityCreatePageModule,
        EntityEditPageModule,
        EntityInfoPageModule,
    ],
})
export class EntitiesModule {}
