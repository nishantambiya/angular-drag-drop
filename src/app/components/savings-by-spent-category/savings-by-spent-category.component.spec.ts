import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SavingsBySpentCategoryComponent } from './savings-by-spent-category.component';

describe('SavingsBySpentCategoryComponent', () => {
  let component: SavingsBySpentCategoryComponent;
  let fixture: ComponentFixture<SavingsBySpentCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SavingsBySpentCategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SavingsBySpentCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
