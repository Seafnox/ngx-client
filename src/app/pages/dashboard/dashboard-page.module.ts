import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardPageComponent } from './dashboard-page.component';
import { DashboardModule } from '../../components/dashboard/dashboard.module';
import { DashboardPageRouting } from './dashboard-page.routing';
import { NotFoundPageModule } from '../not-found/not-found-page.module';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';

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
