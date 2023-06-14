import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ToDoService } from '../../services/to-do.service';
import { ToDo } from 'src/app/models/to-do';

@Component({
  selector: 'app-to-do-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss'],
})
export class ToDoListComponent {
  todos: ToDo[] = [];
  filteredTodos: ToDo[] = [];
  
  constructor(public todoService: ToDoService) {
    this.todos = todoService.todos;
    this.filteredTodos = todoService.todos;
  }
  
  filterToDos(todo: ToDo) {
    this.filteredTodos = this.todoService.filterToDos(todo);
  }
}