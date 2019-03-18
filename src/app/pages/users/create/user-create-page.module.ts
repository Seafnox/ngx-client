import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserCreatePageComponent } from './user-create-page.component';
import { LoadingModule } from '../../../components/loading/loading.module';

@NgModule({
    declarations: [UserCreatePageComponent],
    exports: [UserCreatePageComponent],
    imports: [
        CommonModule,
        LoadingModule,
    ],
})
export class UserCreatePageModule {}
