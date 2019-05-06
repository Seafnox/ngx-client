import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundPageModule } from '../not-found/not-found-page.module';
import { UserPagesRouting } from './user-pages.routing';
import { UserListPageModule } from './list/user-list-page.module';
import { UserCreatePageModule } from './create/user-create-page.module';
import { UserEditPageModule } from './edit/user-edit-page.module';

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        UserPagesRouting,
        NotFoundPageModule,
        UserListPageModule,
        UserCreatePageModule,
        UserEditPageModule,
    ],
})
export class UserPagesModule {}
