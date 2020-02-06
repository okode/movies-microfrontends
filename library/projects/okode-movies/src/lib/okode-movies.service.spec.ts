import { TestBed } from '@angular/core/testing';

import { OkodeMoviesService } from './okode-movies.service';

describe('OkodeMoviesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OkodeMoviesService = TestBed.get(OkodeMoviesService);
    expect(service).toBeTruthy();
  });
});
