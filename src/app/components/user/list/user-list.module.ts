import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list.component';
import { MatButtonModule, MatIconModule, MatListModule, MatRippleModule, MatToolbarModule } from '@angular/material';

@NgModule({
    declarations: [UserListComponent],
    exports: [UserListComponent],
    imports: [
        CommonModule,
        MatListModule,
        MatToolbarModule,
        MatRippleModule,
        MatButtonModule,
        MatIconModule,
    ],
    exports: [
        UserListComponent,
    ],
})
export class UserListModule {}
