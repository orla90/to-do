import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToDoSearchComponent } from './to-do-search.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ToDoSearchComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    ToDoSearchComponent
  ]
})
export class ToDoSearchModule { 
}
