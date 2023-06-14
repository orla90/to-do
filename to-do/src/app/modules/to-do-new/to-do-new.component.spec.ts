import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToDoNewComponent } from './to-do-new.component';

describe('ToDoNewComponent', () => {
  let component: ToDoNewComponent;
  let fixture: ComponentFixture<ToDoNewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ToDoNewComponent]
    });
    fixture = TestBed.createComponent(ToDoNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
