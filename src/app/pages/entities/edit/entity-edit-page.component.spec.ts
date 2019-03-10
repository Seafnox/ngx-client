import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntityEditPageComponent } from './entity-edit-page.component';

describe('UserInfoPageComponent', () => {
    let component: EntityEditPageComponent;
    let fixture: ComponentFixture<EntityEditPageComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [EntityEditPageComponent],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(EntityEditPageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
