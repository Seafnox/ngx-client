import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntityUpdatePageComponent } from './entity-update-page.component';

describe('EntityViewPageComponent', () => {
  let component: EntityUpdatePageComponent;
  let fixture: ComponentFixture<EntityUpdatePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EntityUpdatePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntityUpdatePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
