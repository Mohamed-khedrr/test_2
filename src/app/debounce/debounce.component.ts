import { Component } from '@angular/core';

@Component({
  selector: 'app-debounce',
  standalone: true,
  imports: [],
  templateUrl: './debounce.component.html',
  styleUrl: './debounce.component.scss',
})
export class DebounceComponent {
  changes: string[] = [];

  onInput(event: Event) {
    let timer: any;
    this.debounce(
      () => {
        this.changes.push((event.target as HTMLInputElement).value);
      },
      3000,
      timer
    );
  }

  debounce(fn: Function, delay: number, timer: any) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn();
    }, delay);
  }
}
