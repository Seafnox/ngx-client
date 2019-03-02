import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundPageComponent } from '../pages/not-found/not-found-page.component';
import { DashboardPageComponent } from '../pages/dashboard/dashboard-page.component';

const routes: Routes = [
    {
        path: '',
        component: DashboardPageComponent,
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
export class AppRouting {
}
