import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-message-details',
  templateUrl: './message-details.component.html',
  styleUrls: ['./message-details.component.css'],
})
export class MessageDetailsComponent {
  @Input()
  message: any = {};

  @Input()
  index: number = -1;

  testOutput: string = 'this is a test output string';

  @Output()
  itemToDelete: EventEmitter<any> = new EventEmitter<any>();

  onDelete(): void {
    this.itemToDelete.emit(this.index);
  }
}
