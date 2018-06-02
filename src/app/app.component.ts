import { Component } from '@angular/core';

@Component({
  selector: 'app-root2', //this is injected in the index.html app-root2 tag
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] //can also use styles
})
export class AppComponent {
  name2 = 'my learning of angular';
}