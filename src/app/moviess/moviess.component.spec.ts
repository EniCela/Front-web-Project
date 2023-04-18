import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviessComponent } from './moviess.component';

describe('MoviessComponent', () => {
  let component: MoviessComponent;
  let fixture: ComponentFixture<MoviessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoviessComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoviessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
