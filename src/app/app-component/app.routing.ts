import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundPageComponent } from '../pages/not-found/not-found-page.component';

const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('../pages/dashboard/dashboard-page.module').then(m => m.DashboardPageModule),
    },
    {
        path: '**',
        component: NotFoundPageComponent,
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
    exports: [RouterModule],
})
export class AppRouting {}
