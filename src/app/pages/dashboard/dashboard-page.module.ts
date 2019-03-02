import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardPageComponent } from './dashboard-page.component';
import { AdminMenuModule } from '../../components/admin-menu/admin-menu.module';
import { DashboardModule } from '../../components/dashboard/dashboard.module';

@NgModule({
              imports: [
                  CommonModule,
                  AdminMenuModule,
                  DashboardModule,
              ],
              declarations: [DashboardPageComponent],
          })
export class DashboardPageModule {}
