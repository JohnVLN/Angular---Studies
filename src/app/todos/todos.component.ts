import { Component, inject, OnInit } from '@angular/core';
import { TodosService } from '../services/todos.service';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.scss'
})
export class TodosComponent implements OnInit {
  todoservice = inject(TodosService); // injects the todo service in component

  ngOnInit(): void {
    console.log(this.todoservice.todoItems) // logs the items in console
  }
}
