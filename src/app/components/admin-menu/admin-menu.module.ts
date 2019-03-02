import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminMenuComponent } from './admin-menu.component';

@NgModule({
              imports: [
                  CommonModule,
              ],
              declarations: [AdminMenuComponent],
              exports: [AdminMenuComponent],
          })
export class AdminMenuModule {}