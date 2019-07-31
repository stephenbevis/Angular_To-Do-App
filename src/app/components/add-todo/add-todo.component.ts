import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { Todo } from '../../models/Todo';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss']
})
export class AddTodoComponent implements OnInit {
  @Output() newTodo: EventEmitter<Todo> = new EventEmitter();
  @Output() updatedTodo: EventEmitter<Todo> = new EventEmitter();
  @Input() currentTodo: Todo;
  @Input() isEdit: boolean;

  constructor(private todoService: TodoService) { }

  ngOnInit() {
  }

  addTodo = (todoHeader, todoBody, complete, notComplete) => {

    if(!todoHeader && !todoBody){
      console.log("Please Fill Out Title and Body");
    } else {
      this.todoService.saveTodo({todoHeader,todoBody,complete,notComplete} as Todo).subscribe(todo => {
        this.newTodo.emit(todo);
      });
    }
  }

  updateTodo(){
    this.todoService.updateTodo(this.currentTodo).subscribe(todo => {
      this.isEdit = false;
      this.updatedTodo.emit(todo);
    });
  }
}
