import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundPageComponent } from '../not-found/not-found-page.component';
import { UserCreatePageComponent } from './create/user-create-page.component';
import { UserEditPageComponent } from './edit/user-edit-page.component';
import { UserListPageComponent } from './list/user-list-page.component';

const routes: Routes = [
    {
        path: '',
        component: UserListPageComponent,
        pathMatch: 'full',
    },
    {
        path: 'create',
        component: UserCreatePageComponent,
    },
    {
        path: 'edit/:id',
        component: UserEditPageComponent,
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
export class UserPagesRouting {}
