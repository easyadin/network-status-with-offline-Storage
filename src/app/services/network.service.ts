import { Injectable, OnInit, OnDestroy } from '@angular/core';
import { Plugins, NetworkStatus, PluginListenerHandle } from '@capacitor/core';
import { Subject } from 'rxjs';
import { networkStatus } from '../models/networkstatus';

const { Network } = Plugins; // destructing

@Injectable({
  providedIn: 'root'
})
export class NetworkService implements OnInit, OnDestroy {
  ngOnInit(): void { }

  networkListener: PluginListenerHandle;
  private networkStatus: NetworkStatus;

  networkStatusEvent: networkStatus = {
    MESSAGE: '',
    ONLINE: undefined
  };
  networkStatusChanged = new Subject<networkStatus>();

  // watch network for a disconnection
  async getNetworkStatus() {
    this.networkListener = Network.addListener('networkStatusChange', (status) => {
      console.log("Network status changed", status);
      this.networkStatus = status;
      if (status.connected === false) {
        this.networkStatusEvent.MESSAGE = "Offline";
        this.networkStatusEvent.ONLINE = false;
        this.networkStatusChanged.next(this.networkStatusEvent)
      }
      if (status.connected === true) {
        this.networkStatusEvent.MESSAGE = "Online";
        this.networkStatusEvent.ONLINE = true;
        this.networkStatusChanged.next(this.networkStatusEvent)
      }
    });

    this.networkStatus = await Network.getStatus();
    console.log(this.networkStatus)
    console.log(Network)
    
    if (this.networkStatus.connected === true) {
      this.networkStatusEvent.MESSAGE = "Online";
      this.networkStatusEvent.ONLINE = true;
      this.networkStatusChanged.next(this.networkStatusEvent)
    }
    if (this.networkStatus.connected === false) {
      this.networkStatusEvent.MESSAGE = "Offline";
      this.networkStatusEvent.ONLINE = false;
      this.networkStatusChanged.next(this.networkStatusEvent)
    }
  }

  ngOnDestroy() {
    this.networkListener.remove();
  }
}
