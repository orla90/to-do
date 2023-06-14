import { Injectable } from '@angular/core';
import { ToDo } from '../models/to-do';

@Injectable({
  providedIn: 'root',
})
export class ToDoService {
  todos: Array<ToDo> = [
    {
      id: 1,
      todo: 'Do something nice for someone I care about',
      status: 'done',
    },
    {
      id: 2,
      todo: 'Memorize the fifty states and their capitals',
      status: 'done',
    },
    {
      id: 3,
      todo: 'Watch a classic movie',
      status: 'ordinary',
    },
    {
      id: 4,
      todo: 'Contribute code or a monetary donation to an open-source software project',
      status: 'ordinary',
    },
    {
      id: 5,
      todo: "Solve a Rubik's cube",
      status: 'important',
    },
    {
      id: 6,
      todo: 'Bake pastries for me and neighbor',
      status: 'important',
    },
    {
      id: 7,
      todo: 'Go see a Broadway production',
      status: 'ordinary',
    },
    {
      id: 8,
      todo: 'Write a thank you letter to an influential person in my life',
      status: 'ordinary',
    },
    {
      id: 9,
      todo: 'Invite some friends over for a game night',
      status: 'ordinary',
    },
    {
      id: 10,
      todo: 'Have a football scrimmage with some friends',
      status: 'ordinary',
    },
  ];
  constructor() { }

  addToDo(todo: ToDo): void {
    if (!todo.todo) return;
    if (!todo.id) {
      todo.id = this.todos[this.todos.length - 1].id + 1;
    }
    if (!todo.status) {
      todo.status = 'ordinary';
    }
    this.todos = [...this.todos, todo];
  }

  updateToDoById(id: number, values: Object = {}) {
    let todo = this.getToDoById(id);
    if (!todo) return;
    this.todos = [...this.todos, Object.assign(todo, values)];
  }

  deleteToDoById(id: number): void {
    this.todos = this.todos.filter((todo) => todo.id !== id);
  }

  getToDoById(id: number): ToDo | undefined {
    return this.todos.filter((todo) => todo.id === id).pop();
  }

  toggleToDoStatusById(todo: ToDo): void {
    let todoNote = this.getToDoById(todo.id) as ToDo;
    todoNote = { ...todoNote, status: todo.status }
    if (!todoNote) return;
    this.todos = this.todos.filter(todo => todo.id !== todoNote.id);
    this.todos = [...this.todos, todoNote];
  }

  filterToDos(todo: ToDo): ToDo[] {
    return (this.todos = this.todos.filter(
      (todoNote) =>
        todoNote.todo.toLowerCase().includes(todo.todo.toLowerCase()) &&
        todoNote.status === todo.status
    ));
  }
}