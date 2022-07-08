import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DummyAPIComponent } from './dummy-api.component';


describe('DummyAPIComponent', () => {
  let component: DummyAPIComponent;
  let fixture: ComponentFixture<DummyAPIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DummyAPIComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DummyAPIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
