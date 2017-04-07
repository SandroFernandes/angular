import {Component} from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styles:[
    `.online {color:white}`
  ]
})

export class ServerComponent {
  serverId: number = 10;
  serverStatus: string = 'offline';


  constructor(){
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
    setInterval(this.updateStatus,1000)
  }

  getColor(){
    console.log('getColor ->',this.serverStatus);
    return (this.serverStatus === 'online' ? 'green' : 'red');
  }


  getServerStatus() {
    return this.serverStatus;
  }

  updateStatus(){
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
    console.log('update->',this.serverStatus)

  }

}
