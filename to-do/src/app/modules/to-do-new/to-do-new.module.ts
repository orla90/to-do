import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToDoNewComponent } from './to-do-new.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ToDoNewComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [ToDoNewComponent],
})
export class ToDoNewModule {}