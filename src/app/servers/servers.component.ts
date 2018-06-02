import { Component, OnInit } from '@angular/core';
//template or templateurl is required in component
@Component({
  //selector id is not supported but html element, attribute and class is like below
  // selector: 'app-servers', //use as html tag
  // selector: '[app-servers]', //use as CSS attribute
  selector: '.app-servers', //use as CSS class
  // templateUrl: './servers.component.html',
  //using single quote
  //template: '<p>servers works!</p>below is inherited from app-server<br><br><app-server></app-server><br><app-server></app-server>',
  //using back tick..multiple lines
  template: `
    <p>servers works!</p>
    below is inherited from app-server<br>
    <br><app-server></app-server>
    <br><app-server></app-server>`,
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
