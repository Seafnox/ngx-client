import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListPageComponent } from './user-list-page.component';
import { LoadingModule } from '../../../components/loading/loading.module';
import { UserListModule } from '../../../components/user/list/user-list.module';
import { MatButtonModule, MatToolbarModule } from '@angular/material';

@NgModule({
    declarations: [UserListPageComponent],
    imports: [
        CommonModule,
        LoadingModule,
        UserListModule,
        MatToolbarModule,
        MatButtonModule,
    ],
})
export class UserListPageModule {}
