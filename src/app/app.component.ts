import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title: string = 'Hello Angular!';

  firstName: string = 'Munshi';
  lastName: string = 'Zaman';
}
