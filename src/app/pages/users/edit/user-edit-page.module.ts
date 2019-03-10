import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserEditPageComponent } from './user-edit-page.component';
import { LoadingModule } from '../../../components/loading/loading.module';

@NgModule({
    declarations: [UserEditPageComponent],
    imports: [
        CommonModule,
        LoadingModule,
    ],
})
export class UserEditPageModule {}
