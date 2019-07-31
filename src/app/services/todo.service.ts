import { Injectable } from '@angular/core';

import {Todo} from '../models/Todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  todos: Todo[];

  constructor() {
    this.todos = [
      {
        id:'1',
        todoHeader: "Make ToDo App",
        todoBody: "Make a really cool todo app!",
        notComplete: true,
        complete: false
      },
      {
        id:'2',
        todoHeader: "Automate Todos",
        todoBody: "Program javascript to allow user to write and update todos.",
        notComplete: true,
        complete: false
      },
      {
        id:'3',
        todoHeader: "Just A Third Todo",
        todoBody: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda mollitia expedita aut sequi esse qui temporibus? Totam optio nesciunt accusamus labore voluptatem? Cum est asperiores, minima numquam veniam reiciendis maiores.",
        notComplete: true,
        complete: false
      }
    ];
  }

  getTodos(): Todo[] {
    return this.todos;
  }
}
