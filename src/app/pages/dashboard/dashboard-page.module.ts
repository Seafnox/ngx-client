import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardPageComponent } from './dashboard-page.component';
import { DashboardModule } from '../../components/dashboard/dashboard.module';
import { DashboardPageRouting } from './dashboard-page.routing';
import { NotFoundPageModule } from '../not-found/not-found-page.module';
import { MatButtonModule, MatIconModule, MatListModule, MatSidenavModule, MatToolbarModule } from '@angular/material';

@NgModule({
    imports: [
        CommonModule,
        DashboardModule,
        DashboardPageRouting,
        NotFoundPageModule,
        MatToolbarModule,
        MatButtonModule,
        MatSidenavModule,
        MatIconModule,
        MatListModule,
    ],
    declarations: [DashboardPageComponent],
})
export class DashboardPageModule {}
