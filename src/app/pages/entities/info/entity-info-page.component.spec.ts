import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntityInfoPageComponent } from './entity-info-page.component';

describe('UserInfoPageComponent', () => {
    let component: EntityInfoPageComponent;
    let fixture: ComponentFixture<EntityInfoPageComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [EntityInfoPageComponent],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(EntityInfoPageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
