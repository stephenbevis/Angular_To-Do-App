import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { Todo } from '../../models/Todo';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss']
})
export class AddTodoComponent implements OnInit {
  todos: Todo[];

  todo: Todo = {
    id:'',
    todoHeader: '',
    todoBody:'',
    notComplete: true,
    complete: false
  }

  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.todos = this.todoService.getTodos();
  }

  onSubmit = (e) => {
    e.preventDefault();
  }

  addTodo = () => {
    this.todos.unshift(this.todo);
    
    this.todo = {
      id:'',
      todoHeader: '',
      todoBody:'',
      notComplete: true,
      complete: false
    }
  }
}
