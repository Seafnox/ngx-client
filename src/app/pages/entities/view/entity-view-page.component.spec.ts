import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntityViewPageComponent } from './entity-view-page.component';

describe('EntityViewPageComponent', () => {
  let component: EntityViewPageComponent;
  let fixture: ComponentFixture<EntityViewPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EntityViewPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntityViewPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
