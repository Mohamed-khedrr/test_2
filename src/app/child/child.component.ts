import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss',
})
export class ChildComponent implements OnChanges, AfterViewInit, OnInit {
  @Input() objArr: any;
  @Input() loading: boolean = false;
  @Input() itemsArray: number = 0;
  @Output() reachedBottom: EventEmitter<any> = new EventEmitter();
  @ViewChild('scrollable') scrollableDiv: ElementRef | undefined;

  ngOnInit() {
    this.onscroll();
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes['objArr']?.previousValue);
    console.log(changes['loading']?.previousValue);
    console.log(changes['itemsArray']?.previousValue);
    if (
      changes['itemsArray']?.previousValue !=
      changes['itemsArray']?.currentValue
    )
      setTimeout(() => {
        this.onscroll();
      }, 100);
  }

  ngAfterViewInit(): void {
    console.log('changes');
    setTimeout(() => {
      this.onscroll();
    }, 500);
    // if (changes['objArr']) {
    //   console.log('objArr changed');
    // }
  }

  onscroll() {
    const element = this.scrollableDiv?.nativeElement;
    if (!element || this.loading) return;

    const { scrollHeight, scrollTop, clientHeight } = element;
    const buffer = 100;

    if (
      clientHeight < scrollHeight ||
      clientHeight > Math.round(scrollHeight - scrollTop - buffer)
    ) {
      this.reachedBottom.emit(true);
    }
  }
}
