import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToDoListComponent } from './to-do-list.component';
import { ToDoItemModule } from '../to-do-item/to-do-item.module';
import { ToDoNewModule } from '../to-do-new/to-do-new.module';
@NgModule({
    declarations: [ToDoListComponent],
    exports: [ToDoListComponent],
    imports: [CommonModule, ToDoItemModule, ToDoNewModule]
})
export class ToDoListModule {}