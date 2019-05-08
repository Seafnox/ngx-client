import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundPageComponent } from '../not-found/not-found-page.component';
import { GalleryListPageComponent } from './list/gallery-list-page.component';
import { GalleryEditPageComponent } from './edit/gallery-edit-page.component';
import { GalleryCreatePageComponent } from './create/gallery-create-page.component';

const routes: Routes = [
    {
        path: '',
        component: GalleryListPageComponent,
        pathMatch: 'full',
    },
    {
        path: 'create',
        component: GalleryCreatePageComponent,
    },
    {
        path: 'edit/:id',
        component: GalleryEditPageComponent,
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
export class GalleryPagesRoutingModule {}
