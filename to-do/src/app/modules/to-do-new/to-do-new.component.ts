import { Component, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToDo } from 'src/app/classes/to-do';

@Component({
  selector: 'app-to-do-new',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './to-do-new.component.html',
  styleUrls: ['./to-do-new.component.scss'],
})
export class ToDoNewComponent {
  @Output() public addEvent = new EventEmitter();
  
  todoForm = new FormGroup({
    todo: new FormControl('', [Validators.required]),
    status: new FormControl('ordinary'),
  });
  
  get todo() { return this.todoForm.get('todo'); }

  submitApplication() {
    this.addEvent.emit(new ToDo({
      todo: this.todoForm.value.todo ?? '',
      status: this.todoForm.value.status ?? 'ordinary',
    }));
  }
}