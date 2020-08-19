import { DatabaseService } from './../services/database.service';
import { Company } from './../models/company';
import { Component, OnInit, NgZone } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-addcompany',
  templateUrl: './addcompany.page.html',
  styleUrls: ['./addcompany.page.scss'],
})
export class AddcompanyPage implements OnInit {
  constructor(private activatedRoute: ActivatedRoute,
    private databaseService: DatabaseService,
    private ngZone: NgZone
  ) { }

  company: Company = {
    companyName: '',
    headquater: '',
    ceo: '',
    id: '',
    headcount: 0
  };

  ngOnInit() {

  }
  ionViewDidEnter() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if (paramMap.has('id')) {
        this.databaseService.getCompany(paramMap.get('id')).then(data => {
          this.company = data;
          console.log(this.company)
        })
      }
    })
  }

  onSubmit(companyForm) {
    this.databaseService.updateCompany(this.company);
  }
}
