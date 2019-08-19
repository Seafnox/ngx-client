import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserEditPageComponent } from './user-edit-page.component';
import { LoadingModule } from '../../../components/loading/loading.module';
import { UserFormModule } from '../../../components/user/form/user-form.module';
import { UserImageFormModule } from '../../../components/user/image-form/user-image-form.module';
import { MatTabsModule } from '@angular/material/tabs';

@NgModule({
    declarations: [UserEditPageComponent],
    exports: [UserEditPageComponent],
    imports: [
        CommonModule,
        LoadingModule,
        UserFormModule,
        UserImageFormModule,
        MatTabsModule,
    ],
})
export class UserEditPageModule {}
