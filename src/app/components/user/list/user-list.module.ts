import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list.component';
import { MatButtonModule, MatExpansionModule, MatIconModule, MatToolbarModule } from '@angular/material';
import { UserInfoModule } from '../info/user-info.module';

@NgModule({
    imports: [
        CommonModule,
        MatToolbarModule,
        MatButtonModule,
        MatIconModule,
        MatExpansionModule,
        UserInfoModule,
    ],
    declarations: [UserListComponent],
    exports: [UserListComponent],
})
export class UserListModule {}
