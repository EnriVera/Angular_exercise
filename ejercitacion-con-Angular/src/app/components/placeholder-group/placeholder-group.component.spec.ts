import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaceholderGroupComponent } from './placeholder-group.component';

describe('PlaceholderGroupComponent', () => {
  let component: PlaceholderGroupComponent;
  let fixture: ComponentFixture<PlaceholderGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaceholderGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaceholderGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
