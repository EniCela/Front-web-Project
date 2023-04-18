import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminnComponent } from './adminn.component';

describe('AdminnComponent', () => {
  let component: AdminnComponent;
  let fixture: ComponentFixture<AdminnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
