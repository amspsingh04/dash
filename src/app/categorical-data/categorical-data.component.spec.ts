import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoricalDataComponent } from './categorical-data.component';

describe('CategoricalDataComponent', () => {
  let component: CategoricalDataComponent;
  let fixture: ComponentFixture<CategoricalDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CategoricalDataComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CategoricalDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
