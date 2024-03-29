import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { NoImageComponent } from './no-image.component';

describe('NoImageComponent', () => {
    let component: NoImageComponent;
    let fixture: ComponentFixture<NoImageComponent>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [NoImageComponent],
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(NoImageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
