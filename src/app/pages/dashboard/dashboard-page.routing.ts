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
                loadChildren: () => import('../users/user-pages.module').then(m => m.UserPagesModule),
            },
            {
                path: 'articles',
                loadChildren: () => import('../articles/article-pages.module').then(m => m.ArticlePagesModule),
            },
            {
                path: 'galleries',
                loadChildren: () => import('../galleries/gallery-pages.module').then(m => m.GalleryPagesModule),
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
