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
                path: 'users',
                loadChildren: '../users/user-pages.module#UserPagesModule',
            },
            {
                path: 'articles',
                loadChildren: '../articles/article-pages.module#ArticlePagesModule',
            },
            {
                path: 'galleries',
                loadChildren: '../galleries/gallery-pages.module#GalleryPagesModule',
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
