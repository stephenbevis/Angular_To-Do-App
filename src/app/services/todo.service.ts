import { Injectable } from '@angular/core';
import {Todo} from '../models/Todo';

import { Observable } from 'rxjs';

import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  todos: Todo[];

  data: Observable<any>;

  todosUrl: string = "http://localhost:3000/todos";

  constructor(private http: HttpClient) {
  }

  getTodos() : Observable<Todo[]> {
      return this.http.get<Todo[]>(this.todosUrl);
  }

  // getTodos(): Todo[] {
  //   return this.todos;
  // }
}
