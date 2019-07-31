import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { Todo } from '../../models/Todo';

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
  showTodoForm: boolean = false;

  constructor(private todoService: TodoService) {

  }

  ngOnInit() {
    this.todoService.getTodos().subscribe(todos => {
      this.todos = todos;
      this.loaded = true;
    });
  }

  taskClick = (todo: Todo) => {
    todo.notComplete = !todo.notComplete;
    todo.complete = !todo.complete;
  }
}
