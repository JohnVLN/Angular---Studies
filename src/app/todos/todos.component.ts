import { Component, inject, OnInit, signal } from '@angular/core';
import { TodosService } from '../services/todos.service';
import { Todo } from '../components/model/todo.type';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.scss'
})
export class TodosComponent implements OnInit {
  todoservice = inject(TodosService); // injects the todo service in component
  todoItems = signal<Array<Todo>>([]) // sets the information took from service as signal

  ngOnInit(): void {
    console.log(this.todoservice.todoItems); // logs the items in console
    this.todoItems.set(this.todoservice.todoItems); // takes information from service
  }
}
