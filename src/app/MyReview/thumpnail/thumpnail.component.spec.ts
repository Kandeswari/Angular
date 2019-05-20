import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThumpnailComponent } from './thumpnail.component';

describe('ThumpnailComponent', () => {
  let component: ThumpnailComponent;
  let fixture: ComponentFixture<ThumpnailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThumpnailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThumpnailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
