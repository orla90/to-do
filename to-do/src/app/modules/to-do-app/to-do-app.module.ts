import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToDoAppComponent } from './to-do-app.component';
import { ToDoListModule } from '../to-do-list/to-do-list.module';

@NgModule({
  declarations: [ToDoAppComponent],
  exports: [ToDoAppComponent],
  imports: [CommonModule, ToDoListModule],
})
export class ToDoAppModule {}
