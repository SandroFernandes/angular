import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-server-teste',
  templateUrl: './server-teste.component.html',
  styleUrls: ['./server-teste.component.css']
})


export class ServerTesteComponent implements OnInit {
  allowAddServer = false;
  serverCreationStatus = '';
  serverName = 'Teste example';
  userName = '';
  servers = ['test server 1', 'teste serve 2'];

  constructor() {
    setTimeout(() => {
      this.allowAddServer = true;
    }, 2000)
  }

  ngOnInit() {
  }


  onCreateServer() {
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'Server was created ! ' + this.serverName
  }


  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
    console.log(event);
  }

  onClickClearUserName(event:Event){
    this.userName = '';
  }
}
