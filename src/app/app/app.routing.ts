import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundPageComponent } from '../pages/not-found/not-found-page.component';

const routes: Routes = [
    {
        path: '',
        loadChildren: '../pages/dashboard/dashboard-page.module#DashboardPageModule',
    },
    {
        path: '**',
        component: NotFoundPageComponent,
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRouting {}
