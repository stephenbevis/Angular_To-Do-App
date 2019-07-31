import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { Todo } from '../../models/Todo';
// import { currentId } from 'async_hooks';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  // Properties
  todos: Todo[];
  currentTodo: Todo = {
    todoHeader: '',
    todoBody: '',
    notComplete: true,
    complete: false
  };
  notComplete: boolean = true;
  complete: boolean = false;
  loaded: boolean = false;
  disabled: boolean = true;
  showTodoForm: boolean = false;
  isEdit = false;

  constructor(private todoService: TodoService) {

  }

  ngOnInit() {
    this.todoService.getTodos().subscribe(todos => {
      this.todos = todos;
      this.loaded = true;
    });
  }

  onNewTodo(todo: Todo){
    this.todos.unshift(todo);
    this.currentTodo = {
      id:0,
      todoHeader: '',
      todoBody: '',
      notComplete: true,
      complete: false
    }
    this.showTodoForm = false;
  }

  editTodo(todo: Todo){
    this.currentTodo = todo;
    this.isEdit = true;
    this.showTodoForm = true;
  }

  onUpdatedTodo(todo: Todo){
    this.todos.forEach((cur, index) => {
      if(todo.id === cur.id){
        this.todos.splice(index, 1);
        this.todos.unshift(todo);
        this.isEdit = false;
        this.currentTodo = {
          id:0,
          todoHeader: '',
          todoBody: '',
          notComplete: true,
          complete: false
        }
        this.showTodoForm = false;
      }
    });
  }

  removeTodo(todo: Todo){
    this.todoService.removeTodo(todo.id).subscribe(() => {
      this.todos.forEach((cur, index) => {
        if(todo.id === cur.id){
          this.todos.splice(index, 1);
        }
      });
    });
  }

  taskClick = (todo: Todo) => {
    todo.notComplete = !todo.notComplete;
    todo.complete = !todo.complete;
  }
}
