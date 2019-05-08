import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryPagesRoutingModule } from './gallery-pages-routing.module';
import { GalleryListPageModule } from './list/gallery-list-page.module';
import { GalleryEditPageModule } from './edit/gallery-edit-page.module';
import { GalleryCreatePageModule } from './create/gallery-create-page.module';
import { NotFoundPageModule } from '../not-found/not-found-page.module';

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        GalleryPagesRoutingModule,
        GalleryListPageModule,
        GalleryEditPageModule,
        GalleryCreatePageModule,
        NotFoundPageModule,
    ],
})
export class GalleryPagesModule {}
