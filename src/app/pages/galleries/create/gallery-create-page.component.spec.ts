import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { GalleryCreatePageComponent } from './gallery-create-page.component';

describe('GalleryCreatePageComponent', () => {
    let component: GalleryCreatePageComponent;
    let fixture: ComponentFixture<GalleryCreatePageComponent>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [GalleryCreatePageComponent],
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(GalleryCreatePageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
