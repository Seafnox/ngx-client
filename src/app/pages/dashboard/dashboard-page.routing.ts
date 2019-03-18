import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundPageComponent } from '../not-found/not-found-page.component';
import { DashboardPageComponent } from './dashboard-page.component';
import { DashboardComponent } from '../../components/dashboard/dashboard.component';

const routes: Routes = [
    {
        path: '',
        component: DashboardPageComponent,
        children: [
            {
                path: '',
                component: DashboardComponent,
            },
            {
                path: 'editor',
                loadChildren: '../editors/editors-page.module#EditorsPageModule',
            },
            {
                path: 'entities',
                loadChildren: '../entities/entity-pages.module#EntityPagesModule',
            },
            {
                path: 'entities',
                loadChildren: '../users/user-pages.module#UserPagesModule',
            },
            {
                path: '**',
                component: NotFoundPageComponent,
            },
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class DashboardPageRouting {}
