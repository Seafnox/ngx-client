import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { UserCreatePageComponent } from './user-create-page.component';

describe('UserInfoPageComponent', () => {
    let component: UserCreatePageComponent;
    let fixture: ComponentFixture<UserCreatePageComponent>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [UserCreatePageComponent],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(UserCreatePageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
