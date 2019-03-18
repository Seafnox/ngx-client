import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListPageComponent } from './user-list-page.component';
import { LoadingModule } from '../../../components/loading/loading.module';
import { UserListModule } from '../../../components/user/list/user-list.module';

@NgModule({
    declarations: [UserListPageComponent],
    exports: [UserListPageComponent],
    imports: [
        CommonModule,
        LoadingModule,
        UserListModule,
    ],
})
export class UserListPageModule {}
