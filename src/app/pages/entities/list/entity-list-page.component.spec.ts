import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntityListPageComponent } from './entity-list-page.component';

describe('EntityListPageComponent', () => {
  let component: EntityListPageComponent;
  let fixture: ComponentFixture<EntityListPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EntityListPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntityListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
