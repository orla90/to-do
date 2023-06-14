import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ToDo } from 'src/app/models/to-do';

@Component({
  selector: 'app-to-do-item',
  templateUrl: './to-do-item.component.html',
  styleUrls: ['./to-do-item.component.scss'],
})
export class ToDoItemComponent {
  @Input() public todo?: ToDo;
  @Output() public deleteEvent = new EventEmitter();
}
