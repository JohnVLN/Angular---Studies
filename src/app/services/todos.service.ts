import { identifierName } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Todo } from '../components/model/todo.type';

@Injectable({
  providedIn: 'root'
})
export class TodosService {
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
  }]
  constructor() { }
}
