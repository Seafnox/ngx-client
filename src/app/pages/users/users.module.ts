import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundPageModule } from '../not-found/not-found-page.module';
import { UsersRouting } from './users-routing.module';
import { UserListPageModule } from './list/user-list-page.module';
import { UserCreatePageModule } from './create/user-create-page.module';
import { UserEditPageModule } from './edit/user-edit-page.module';
import { UserInfoPageModule } from './info/user-info-page.module';

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        UsersRouting,
        NotFoundPageModule,
        UserListPageModule,
        UserCreatePageModule,
        UserEditPageModule,
        UserInfoPageModule,
    ],
})
export class UsersModule {}
