import { Component, OnInit } from '@angular/core';
import {TodoService} from '../../services/todo.service';
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
  showTodoForm: boolean = false;

  constructor(private todoService: TodoService) {

  }

  ngOnInit() {
    this.todos = this.todoService.getTodos();
    this.loaded = true;
    console.log(this.todos);
  }

  taskClick = (todo: Todo) => {
    todo.notComplete = !todo.notComplete;
    todo.complete = !todo.complete;
  }

  focusAnimation = () => {
    if(document.getElementById('description').innerHTML.length >= 0){
      document.getElementById('description_label').style.top = "-23px";
      document.getElementById('description_label').style.fontSize = "12px";
      document.getElementById('description').style.height = "100px";
      document.getElementById('description').style.outline = "none";
      console.log(document.getElementById('description').innerHTML.length);
    }
  }

  blurAnimation = () => {
    if(document.getElementById('description').innerHTML.length == 0){
      document.getElementById('description_label').style.top = "0px";
      document.getElementById('description_label').style.fontSize = "16px";
      document.getElementById('description').style.height = "47px";
      console.log(document.getElementById('description').innerHTML.length);
    } else {
      document.getElementById('description_label').style.top = "-23px";
      document.getElementById('description_label').style.fontSize = "12px";
      document.getElementById('description').style.height = "100px";
      document.getElementById('description').style.outline = "none";
      console.log(document.getElementById('description').innerHTML.length);
    }
  }
}
