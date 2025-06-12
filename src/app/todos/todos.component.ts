import { Component, inject, OnInit, signal } from '@angular/core';
import { TodosService } from '../services/todos.service';
import { Todo } from '../components/model/todo.type';
import { catchError } from 'rxjs';

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
    this.todoservice.getTodosFromAPI()
    .pipe(catchError((err) => {
        console.log(err);
        throw err;
      })
    )
    .subscribe((todos) => {
      this.todoItems.set(todos);
    });
  }
}
