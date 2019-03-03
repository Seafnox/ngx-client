import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardPageComponent } from './dashboard-page.component';
import { AdminMenuModule } from '../../components/admin-menu/admin-menu.module';
import { DashboardModule } from '../../components/dashboard/dashboard.module';
import { DashboardPageRouting } from './dashboard-page.routing';

@NgModule({
    imports: [
        CommonModule,
        AdminMenuModule,
        DashboardModule,
        DashboardPageRouting,
    ],
    declarations: [DashboardPageComponent],
})
export class DashboardPageModule {}
