import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { UserImageFormComponent } from './user-image-form.component';

describe('UserImageFormComponent', () => {
    let component: UserImageFormComponent;
    let fixture: ComponentFixture<UserImageFormComponent>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [UserImageFormComponent],
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(UserImageFormComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
