import { TestBed } from '@angular/core/testing';

import { AbstractCrudService } from './abstract-crud.service';

describe('AbstractCrudService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AbstractCrudService = TestBed.get(AbstractCrudService);
    expect(service).toBeTruthy();
  });
});
