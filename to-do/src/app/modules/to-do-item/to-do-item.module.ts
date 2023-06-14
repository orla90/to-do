import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToDoItemComponent } from './to-do-item.component';

@NgModule({
  declarations: [ToDoItemComponent],
  imports: [CommonModule],
  exports: [ToDoItemComponent],
})
export class ToDoItemModule {}
