import { Component, OnInit } from '@angular/core';
//template or templateurl is required in component
@Component({
  //selector id is not supported but html element, attribute and class is like below
  // selector: 'app-servers', //use as html tag
  // selector: '[app-servers]', //use as CSS attribute
  selector: '.app-servers', //use as CSS class
  templateUrl: './servers.component.html',
  //using single quote
  //template: '<p>servers works!</p>below is inherited from app-server<br><br><app-server></app-server><br><app-server></app-server>',
  //using back tick..multiple lines
  // template: `
  //   <p>servers works!</p>
  //   below is inherited from app-server<br>
  //   <br><app-server></app-server>
  //   <br><app-server></app-server>`,
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = "No server was created ";
  serverName = 'My Server';
  serverCreated = false;

  constructor() { 
    setTimeout(() => {
      this.allowNewServer = true;
    },2000);
  }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreationStatus = "server was created: " + this.serverName;
    this.serverCreated = true;
    console.log("value of serverCreationStatus: "+this.serverCreationStatus);
  }

  onUpdateServerName(event:Event) {
    this.serverName=(<HTMLInputElement>event.target).value;
  }

}
