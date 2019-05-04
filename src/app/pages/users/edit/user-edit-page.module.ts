import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserEditPageComponent } from './user-edit-page.component';
import { LoadingModule } from '../../../components/loading/loading.module';
import { UserFormModule } from '../../../components/user/form/user-form.module';

@NgModule({
    declarations: [UserEditPageComponent],
    exports: [UserEditPageComponent],
    imports: [
        CommonModule,
        LoadingModule,
        UserFormModule,
    ],
})
export class UserEditPageModule {}
