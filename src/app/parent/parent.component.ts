import { Component, OnInit } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [ChildComponent],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.scss',
})
export class ParentComponent implements OnInit {
  obj: { arr: any[] } = { arr: [] };
  isLoading: boolean = false;
  arr = ['arr-1', 'arr-2', 'arr-3'];

  ngOnInit(): void {
    this.setData();
  }

  setData() {
    this.isLoading = true;
    setTimeout(() => {
      this.obj.arr.push(...this.arr);
      this.isLoading = false;
    }, 2000);
  }

  reachedBottom() {
    this.setData();
  }
}
