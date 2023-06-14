import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToDoSearchComponent } from './to-do-search.component';

describe('ToDoSearchComponent', () => {
  let component: ToDoSearchComponent;
  let fixture: ComponentFixture<ToDoSearchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ToDoSearchComponent]
    });
    fixture = TestBed.createComponent(ToDoSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
