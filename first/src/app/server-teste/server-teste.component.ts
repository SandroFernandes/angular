import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-server-teste',
  templateUrl: './server-teste.component.html',
  styleUrls: ['./server-teste.component.css']
})


export class ServerTesteComponent implements OnInit {
  allowAddServer = false;
  serverCreationStatus = "Server was not created !";
  serverName = 'Teste example';

  constructor() {
    setTimeout(() => {
      this.allowAddServer = true;
    }, 2000)
  }

  ngOnInit() {
  }


  onCreateServer() {
    this.serverCreationStatus = 'Server was created ! ' + this.serverName
  }


  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
    console.log(event);
  }
}
