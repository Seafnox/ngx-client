import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { GalleryEditPageComponent } from './gallery-edit-page.component';

describe('GalleryEditPageComponent', () => {
    let component: GalleryEditPageComponent;
    let fixture: ComponentFixture<GalleryEditPageComponent>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [GalleryEditPageComponent],
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(GalleryEditPageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
