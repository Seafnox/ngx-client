import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserInfoComponent } from './user-info.component';
import { MatButtonModule, MatCardModule, MatIconModule } from '@angular/material';
import { LoadingModule } from '../../loading/loading.module';

@NgModule({
    imports: [
        CommonModule,
        MatCardModule,
        LoadingModule,
        MatButtonModule,
        MatIconModule,
    ],
    declarations: [UserInfoComponent],
    exports: [UserInfoComponent],
})
export class UserInfoModule {}
