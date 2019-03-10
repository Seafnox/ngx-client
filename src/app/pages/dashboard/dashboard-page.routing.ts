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
                path: 'entity',
                loadChildren: '../entity-list/entity-list-page.module#EntityListPageModule',
            },
            {
                path: 'entity/create',
                loadChildren: '../entity-create/entity-create-page.module#EntityCreatePageModule',
            },
            {
                path: 'entity/:id',
                loadChildren: '../entity-view/entity-view-page.module#EntityViewPageModule',
            },
            {
                path: 'entity/:id/update',
                loadChildren: '../entity-update/entity-update-page.module#EntityViewPageModule',
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
