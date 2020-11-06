import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titles: string[];
  selected = '';
  header = 'John M. Pridmore';
  title = 'J.M.P.';
}
