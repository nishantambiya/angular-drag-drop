import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SavingsByProjectComponent } from './savings-by-project.component';

describe('SavingsByProjectComponent', () => {
  let component: SavingsByProjectComponent;
  let fixture: ComponentFixture<SavingsByProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SavingsByProjectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SavingsByProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
