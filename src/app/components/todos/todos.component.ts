import { Component, OnInit } from '@angular/core';

import {Todo} from '../../models/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  // Properties
  todos: Todo[];
  notComplete: boolean = true;
  complete: boolean = false;
  loaded: boolean = false;
  disabled: boolean = true;

  constructor() { }

  ngOnInit() {

    // Mimicking pulling tasks from a database

    setTimeout(() => {
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

      this.loaded = true;
    }, 1500);
  }

  taskClick = (todo: Todo) => {
    todo.notComplete = !todo.notComplete;
    todo.complete = !todo.complete;
  }
}
