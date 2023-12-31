import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {
  allowNewServer = false;
  serverCreateStatus = 'No server was created';
  serverName = '';
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    },2000);
  }

  onCreateServer() {
    this.serverCreateStatus = 'Server was created!';
  }

  onUpdateServerName(event: any) {
    this.serverName = event.target.value;
  }
}
