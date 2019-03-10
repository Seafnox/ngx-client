import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundPageComponent } from '../not-found/not-found-page.component';
import { EntityCreatePageComponent } from './create/entity-create-page.component';
import { EntityEditPageComponent } from './edit/entity-edit-page.component';
import { EntityInfoPageComponent } from './info/entity-info-page.component';
import { EntityListPageComponent } from './list/entity-list-page.component';

const routes: Routes = [
    {
        path: '',
        component: EntityListPageComponent,
    },
    {
        path: 'create',
        component: EntityCreatePageComponent,
    },
    {
        path: ':id/edit',
        component: EntityEditPageComponent,
    },
    {
        path: ':id/info',
        component: EntityInfoPageComponent,
    },
    {
        path: ':id',
        redirectTo: ':id/info',
        pathMatch: 'full',
    },
    {
        path: '**',
        component: NotFoundPageComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class EntitiesRouting {}
