import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntityCreatePageComponent } from './entity-create-page.component';

describe('EntityViewPageComponent', () => {
  let component: EntityCreatePageComponent;
  let fixture: ComponentFixture<EntityCreatePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EntityCreatePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntityCreatePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
