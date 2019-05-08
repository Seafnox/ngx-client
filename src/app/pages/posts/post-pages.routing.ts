import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundPageComponent } from '../not-found/not-found-page.component';
import { PostListPageComponent } from './list/post-list-page.component';
import { PostEditPageComponent } from './edit/post-edit-page.component';
import { PostCreatePageComponent } from './create/post-create-page.component';

const routes: Routes = [
    {
        path: '',
        component: PostListPageComponent,
        pathMatch: 'full',
    },
    {
        path: 'create',
        component: PostCreatePageComponent,
    },
    {
        path: 'edit/:id',
        component: PostEditPageComponent,
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
export class PostPagesRouting {}
