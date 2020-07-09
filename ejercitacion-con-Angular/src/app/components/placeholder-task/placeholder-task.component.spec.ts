import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaceholderTaskComponent } from './placeholder-task.component';

describe('PlaceholderTaskComponent', () => {
  let component: PlaceholderTaskComponent;
  let fixture: ComponentFixture<PlaceholderTaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaceholderTaskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaceholderTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
