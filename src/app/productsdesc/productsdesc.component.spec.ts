import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsdescComponent } from './productsdesc.component';

describe('ProductsdescComponent', () => {
  let component: ProductsdescComponent;
  let fixture: ComponentFixture<ProductsdescComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductsdescComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsdescComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
