import { Injectable } from '@angular/core';
import {Todo} from '../models/Todo';

import { Observable } from 'rxjs';

import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
}

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  todos: Todo[];

  data: Observable<any>;

  todosUrl: string = "http://localhost:3000/todos";

  constructor(private http: HttpClient) {
  }

  getTodos(): Observable<Todo[]> {
      return this.http.get<Todo[]>(this.todosUrl);
  }

  saveTodo(todo: Todo): Observable<Todo>{
    return this.http.post<Todo>(this.todosUrl, todo, httpOptions);
  }

  updateTodo(todo: Todo): Observable<Todo>{
    const url = `${this.todosUrl}/${todo.id}`;
    return this.http.put<Todo>(url, todo, httpOptions);
  }

  removeTodo(todo: Todo | number): Observable<Todo>{
    const id = typeof todo === 'number' ? todo : todo.id;
    const url = `${this.todosUrl}/${id}`;
    return this.http.delete<Todo>(url, httpOptions);
  }
}
