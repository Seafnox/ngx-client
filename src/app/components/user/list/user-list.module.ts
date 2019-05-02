import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list.component';
import { MatListModule, MatToolbarModule } from '@angular/material';

@NgModule({
    declarations: [UserListComponent],
    exports: [UserListComponent],
    imports: [
        CommonModule,
        MatListModule,
        MatToolbarModule,
    ],
    exports: [
        UserListComponent,
    ],
})
export class UserListModule {}
