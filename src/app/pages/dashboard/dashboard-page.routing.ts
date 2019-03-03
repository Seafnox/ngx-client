import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from '../../components/dashboard/dashboard.component';
import { NotFoundPageComponent } from '../not-found/not-found-page.component';
import { EditorsPageComponent } from '../editors/editors-page.component';

const routes: Routes = [
    {
        path: '',
        component: DashboardComponent,
    },
    {
        path: 'editor',
        component: EditorsPageComponent,
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
export class DashboardPageRouting {}
