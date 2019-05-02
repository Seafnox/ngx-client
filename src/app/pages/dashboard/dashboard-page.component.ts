import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AdminSidebarStateService } from '../../services/admin-sidebar-state/admin-sidebar-state.service';

@Component({
    selector: 'app-dashboard-page',
    templateUrl: './dashboard-page.component.html',
    styleUrls: ['./dashboard-page.component.css'],
})
export class DashboardPageComponent {
    isOpenedSidebar$: Observable<boolean> = this.adminSidebarStateService.isOpened$;

    constructor(private adminSidebarStateService: AdminSidebarStateService) {}

    toggleSidebar(): void {
        this.adminSidebarStateService.toggle();
    }
}
