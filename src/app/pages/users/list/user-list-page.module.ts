import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListPageComponent } from './user-list-page.component';
import { LoadingModule } from '../../../components/loading/loading.module';
import { UserListModule } from '../../../components/user/list/user-list.module';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [UserListPageComponent],
    imports: [
        CommonModule,
        RouterModule,
        LoadingModule,
        UserListModule,
        MatToolbarModule,
        MatButtonModule,
    ],
})
export class UserListPageModule {}
