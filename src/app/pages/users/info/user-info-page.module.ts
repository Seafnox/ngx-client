import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserInfoPageComponent } from './user-info-page.component';
import { LoadingModule } from '../../../components/loading/loading.module';

@NgModule({
    declarations: [UserInfoPageComponent],
    exports: [UserInfoPageComponent],
    imports: [
        CommonModule,
        LoadingModule,
    ],
})
export class UserInfoPageModule {}
