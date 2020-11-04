import { Component, OnInit } from '@angular/core';

interface ToDoItem {
  desc: string;
  done: boolean;
}

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  items: ToDoItem[] = [
    {desc: 'clean', done: false},
    {desc: 'read', done: false},
    {desc: 'play', done: true},
  ]

  constructor() { }

  ngOnInit(): void {
  }

  addItem(desc: HTMLInputElement): void {
    this.items = [{desc: desc.value, done: false}, ...this.items];
    desc.value = '';
    desc.focus();
  }

  markComplete(item: ToDoItem): void {
    item.done = true;
  }

  clearCompletedItems(): void {
    this.items = this.items.filter(x => !x.done);
  }

  noCompletedItems(): boolean {
    return this.items.filter(x => x.done).length === 0;
  }

}
