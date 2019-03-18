import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundPageComponent } from '../not-found/not-found-page.component';
import { UserCreatePageComponent } from './create/user-create-page.component';
import { UserEditPageComponent } from './edit/user-edit-page.component';
import { UserInfoPageComponent } from './info/user-info-page.component';
import { UserListPageComponent } from './list/user-list-page.component';

const routes: Routes = [
    {
        path: '',
        component: UserListPageComponent,
    },
    {
        path: 'create',
        component: UserCreatePageComponent,
    },
    {
        path: ':id/edit',
        component: UserEditPageComponent,
    },
    {
        path: ':id/info',
        component: UserInfoPageComponent,
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
export class UserPagesRouting {}
