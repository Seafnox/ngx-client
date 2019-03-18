import { NgModule } from '@angular/core';
import { NotFoundPageModule } from '../not-found/not-found-page.module';
import { UserPagesRouting } from './user-pages.routing';
import { UserListPageModule } from './list/user-list-page.module';
import { UserCreatePageModule } from './create/user-create-page.module';
import { UserEditPageModule } from './edit/user-edit-page.module';
import { UserInfoPageModule } from './info/user-info-page.module';

@NgModule({
    declarations: [],
    imports: [
        UserPagesRouting,
        NotFoundPageModule,
        UserListPageModule,
        UserCreatePageModule,
        UserEditPageModule,
        UserInfoPageModule,
    ],
})
export class UserPagesModule {}
