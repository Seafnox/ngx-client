import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundPageComponent } from '../not-found/not-found-page.component';
import { ArticleListPageComponent } from './list/article-list-page.component';
import { ArticleEditPageComponent } from './edit/article-edit-page.component';
import { ArticleCreatePageComponent } from './create/article-create-page.component';

const routes: Routes = [
    {
        path: '',
        component: ArticleListPageComponent,
        pathMatch: 'full',
    },
    {
        path: 'create',
        component: ArticleCreatePageComponent,
    },
    {
        path: 'edit/:id',
        component: ArticleEditPageComponent,
    },
    {
        path: '**',
        component: NotFoundPageComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ArticlePagesRoutingModule {}
