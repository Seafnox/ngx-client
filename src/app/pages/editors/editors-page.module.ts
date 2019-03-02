import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditorsPageComponent } from './editors-page.component';
import { EditorsModule } from '../../components/editors/editors.module';

@NgModule({
              declarations: [EditorsPageComponent],
              imports: [
                  CommonModule,
                  EditorsModule,
              ],
          })
export class EditorsPageModule {
}
