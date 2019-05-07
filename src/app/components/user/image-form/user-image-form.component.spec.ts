import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserImageFormComponent } from './user-image-form.component';

describe('UserImageFormComponent', () => {
    let component: UserImageFormComponent;
    let fixture: ComponentFixture<UserImageFormComponent>;

    beforeEach(async(() => {
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
