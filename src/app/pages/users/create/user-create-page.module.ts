import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserCreatePageComponent } from './user-create-page.component';
import { LoadingModule } from '../../../components/loading/loading.module';
import { UserFormModule } from '../../../components/user/form/user-form.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [UserCreatePageComponent],
    exports: [UserCreatePageComponent],
    imports: [
        CommonModule,
        LoadingModule,
        UserFormModule,
        ReactiveFormsModule,
    ],
})
export class UserCreatePageModule {}
