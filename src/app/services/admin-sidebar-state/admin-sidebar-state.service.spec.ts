import { TestBed } from '@angular/core/testing';

import { AdminSidebarStateService } from './admin-sidebar-state.service';

describe('AdminSidebarStateService', () => {
    beforeEach(() => TestBed.configureTestingModule({}));

    it('should be created', () => {
        const service: AdminSidebarStateService = TestBed.get(AdminSidebarStateService);
        expect(service).toBeTruthy();
    });
});
