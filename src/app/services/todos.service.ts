import { identifierName } from '@angular/compiler';
import { inject, Injectable } from '@angular/core';
import { Todo } from '../components/model/todo.type';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TodosService {
  http = inject(HttpClient);

  todoItems: Array<Todo> = [{
    title: 'groceries',
    id: 0,
    userID: 1,
    completed: false, 
  }, {
    title: 'car wash',
    id: 2,
    userID: 1,
    completed: false, 
  }];
  getTodosFromAPI() {
    const url = 'https://jsonplaceholder.typicode.com/todos';
    return this.http.get<Array<Todo>>(url);
  }
}
