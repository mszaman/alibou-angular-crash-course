import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-my-first-comp',
  templateUrl: './my-first-comp.component.html',
  styleUrls: ['./my-first-comp.component.css'],
})
export class MyFirstCompComponent {
  name: string = '';
  email: string = '';
  message: string = '';

  isSubmitted: boolean = true;

  messages: Array<any> = [];

  @ViewChild('nameInputField')
  nameInputField!: ElementRef;

  ngAfterViewInit() {
    this.nameInputField.nativeElement.focus();
  }

  onSubmit() {
    this.messages.push({
      name: this.name,
      email: this.email,
      message: this.message,
    });

    this.isSubmitted = true;
    this.name = '';
    this.email = '';
    this.message = '';

    this.nameInputField.nativeElement.focus();
    // this.getElementById('name')?.focus();
  }

  // getElementById(id: string): HTMLElement | null {
  //   return document.getElementById(id);
  // }

  // onClickSubmitButton() {
  //   console.log(this.name);
  // }

  deleteItem(index: number) {
    this.messages.splice(index, 1);
  }
}
