import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from '../../components/dashboard/dashboard.component';
import { NotFoundPageComponent } from '../not-found/not-found-page.component';

const routes: Routes = [
    {
        path: '',
        component: DashboardComponent,
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
export class EditorsPageRouting {}
