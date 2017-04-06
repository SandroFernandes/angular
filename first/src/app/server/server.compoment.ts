import {Component} from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html'
})

export class ServerComponent {
  serverId: number = 10;
  serverStatus: string = 'offline';


  constructor(){
   // setInterval(this.updateStatus,1000)
  }

  getColor(){
    return this.serverStatus === 'online' ? 'green' : 'red';
  }


  getServerStatus() {
    console.log('getStatus ->',this.serverStatus)
    return this.serverStatus;

  }

  updateStatus(){
    console.log('update->',this.serverStatus)
    return this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';

  }

}
