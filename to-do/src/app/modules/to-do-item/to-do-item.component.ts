import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ToDo } from 'src/app/models/to-do';

@Component({
  selector: 'app-to-do-item',
  templateUrl: './to-do-item.component.html',
  styleUrls: ['./to-do-item.component.scss'],
})
export class ToDoItemComponent implements OnInit {
  statusForm!: FormGroup;
  
  ngOnInit(): void {
    this.statusForm = new FormGroup({
      status: new FormControl(this.todo!.status),
    });
  }
  
  @Input() public todo?: ToDo;
  @Output() public deleteEvent = new EventEmitter();
  @Output() public changeStatusEvent = new EventEmitter();

  changeStatus() {
    this.changeStatusEvent.emit({
      id: this.todo!.id,
      status: this.statusForm!.value.status
    })
  }
}
