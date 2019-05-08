import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryEditPageComponent } from './gallery-edit-page.component';

describe('GalleryEditPageComponent', () => {
    let component: GalleryEditPageComponent;
    let fixture: ComponentFixture<GalleryEditPageComponent>;

    beforeEach(async(() => {
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
