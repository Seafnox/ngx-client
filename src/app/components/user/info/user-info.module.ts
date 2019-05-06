import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserInfoComponent } from './user-info.component';
import { MatCardModule } from '@angular/material';
import { LoadingModule } from '../../loading/loading.module';

@NgModule({
    imports: [
        CommonModule,
        MatCardModule,
        LoadingModule,
    ],
    declarations: [UserInfoComponent],
    exports: [UserInfoComponent],
})
export class UserInfoModule {}
