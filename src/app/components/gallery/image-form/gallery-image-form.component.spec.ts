import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { GalleryImageFormComponent } from './gallery-image-form.component';

describe('GalleryImageFormComponent', () => {
    let component: GalleryImageFormComponent;
    let fixture: ComponentFixture<GalleryImageFormComponent>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [GalleryImageFormComponent],
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(GalleryImageFormComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
