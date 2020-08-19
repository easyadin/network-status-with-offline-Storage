import { DatabaseService } from './../services/database.service';
import { NetworkService } from './../services/network.service';
import { Component, OnInit, OnDestroy, NgZone } from '@angular/core';
import { networkStatus } from '../models/networkstatus';
import { Subscription } from 'rxjs';
import { ToastController } from '@ionic/angular';
import { Company } from '../models/company';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit, OnDestroy {
  constructor(
    private networkService: NetworkService,
    public toastController: ToastController,
    private zone: NgZone,
    private databaseService: DatabaseService
  ) { }

  networkStatus: networkStatus = {
    MESSAGE: '',
    ONLINE: undefined
  };

  networkChangeSub: Subscription;

  companies: Company[] = [];

  ngOnInit() {
    // check db ready state
    this.databaseService.getDatabaseState().subscribe(ready => {
      if (ready) {
        console.log("ready")
        // fetch db data
        // this.databaseService.fetchCompanies();
        // console.log(this.databaseService.fetchCompanies())
        this.databaseService.getCompanies().subscribe(companyList => {
          console.log(companyList)
          this.companies = companyList
        })
      }
    })


    // checking network status
    this.networkStatus = this.networkService.networkStatusEvent;
    this.networkService.getNetworkStatus();
    this.networkChangeSub = this.networkService.networkStatusChanged.subscribe(
      async network => {
        this.zone.run(() => {
          this.networkStatus = network;
        })
        console.log(this.networkStatus)
        // toast
        const toast = this.toastController.create({
          message: this.networkStatus.MESSAGE,
          duration: 1000
        });
        (await toast).present();
      }
    )
  }

  onDelete(id) {
    this.databaseService.deleteCompany(id);
  }

  ngOnDestroy(): void {
    this.networkChangeSub.unsubscribe()
  }
}
