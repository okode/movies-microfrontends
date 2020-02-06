import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OkodeMoviesComponent } from './okode-movies.component';

describe('OkodeMoviesComponent', () => {
  let component: OkodeMoviesComponent;
  let fixture: ComponentFixture<OkodeMoviesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OkodeMoviesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OkodeMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
