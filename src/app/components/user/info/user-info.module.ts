import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserInfoComponent } from './user-info.component';
import { MatListModule } from '@angular/material';
import { LoadingModule } from '../../loading/loading.module';

@NgModule({
    imports: [
        CommonModule,
        MatListModule,
        LoadingModule,
    ],
    declarations: [UserInfoComponent],
    exports: [UserInfoComponent],
})
export class UserInfoModule {}
