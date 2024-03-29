import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { UserEditPageComponent } from './user-edit-page.component';

describe('UserInfoPageComponent', () => {
    let component: UserEditPageComponent;
    let fixture: ComponentFixture<UserEditPageComponent>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [UserEditPageComponent],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(UserEditPageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
