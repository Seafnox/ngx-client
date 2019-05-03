import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { MatButtonModule, MatCardModule, MatGridListModule, MatIconModule, MatMenuModule } from '@angular/material';

@NgModule({
    imports: [
        CommonModule,
        MatGridListModule,
        MatCardModule,
        MatMenuModule,
        MatIconModule,
        MatButtonModule,
    ],
    declarations: [DashboardComponent],
    exports: [DashboardComponent],
})
export class DashboardModule {}
