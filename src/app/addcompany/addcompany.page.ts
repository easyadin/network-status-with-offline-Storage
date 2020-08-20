import { DatabaseService } from './../services/database.service';
import { Company, newCompany } from './../models/company';
import { Component, OnInit, NgZone } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-addcompany',
  templateUrl: './addcompany.page.html',
  styleUrls: ['./addcompany.page.scss'],
})
export class AddcompanyPage implements OnInit {
  constructor(private activatedRoute: ActivatedRoute,
    private databaseService: DatabaseService,
  ) { }

  company: Company = {
    companyName: '',
    headquater: '',
    ceo: '',
    id: undefined,
    headcount: 0
  };

  newCompany: newCompany = {
    companyName: '',
    headquater: '',
    ceo: '',
    headcount: 0
  }

  ngOnInit() { }

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

  onSubmit(companyForm: NgForm) {
    this.newCompany.companyName = companyForm.value.companyName;
    this.newCompany.headcount = companyForm.value.headcount;
    this.newCompany.ceo = companyForm.value.ceo
    this.newCompany.headquater = companyForm.value.headquater

    // updating or creating new company?
    if (this.company.id != undefined) {
      this.databaseService.updateCompany(this.company);
    }
    else {
      // new company
      console.log("new company")
      this.databaseService.addCompany(this.newCompany);

    }

    companyForm.reset(); // clear form
  }
}
