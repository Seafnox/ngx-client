import { NgModule } from '@angular/core';
import { NotFoundPageModule } from '../not-found/not-found-page.module';
import { EntityPagesRouting } from './entity-pages.routing';
import { EntityListPageModule } from './list/entity-list-page.module';
import { EntityCreatePageModule } from './create/entity-create-page.module';
import { EntityEditPageModule } from './edit/entity-edit-page.module';
import { EntityInfoPageModule } from './info/entity-info-page.module';

@NgModule({
    declarations: [],
    imports: [
        EntityPagesRouting,
        NotFoundPageModule,
        EntityListPageModule,
        EntityCreatePageModule,
        EntityEditPageModule,
        EntityInfoPageModule,
    ],
})
export class EntityPagesModule {}
