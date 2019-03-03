import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundPageComponent } from '../not-found/not-found-page.component';
import { EditorsComponent } from '../../components/editors/editors.component';
import { EditorsPageComponent } from './editors-page.component';

const routes: Routes = [
    {
        path: '',
        component: EditorsPageComponent,
        children: [
            {
                path: '',
                component: EditorsComponent,
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
export class EditorsPageRouting {}
