import { Company } from './../models/company';
import { Platform } from '@ionic/angular';
import { Injectable, NgZone } from '@angular/core';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
import { SQLitePorter } from '@ionic-native/sqlite-porter/ngx';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  constructor(private router: Router, private ngZone: NgZone, private platform: Platform, private sqlite: SQLite, private sqlPortal: SQLitePorter, private http: HttpClient) {
    // CREATE SQL DATABASE
    // check if platform is ready
    this.platform.ready().then((state) => {
      this.sqlite.create({
        name: 'atwork.db',
        location: 'default'
      })
        .then((db: SQLiteObject) => {
          // this.ngZone.run(() => {
          this.database = db;
          this.seedDatabase();
          // })
        })
        .catch(e => console.error(e))
    });
  }

  // create sql database object
  private database: SQLiteObject;
  // monitor database ready
  private dbReady: BehaviorSubject<boolean> = new BehaviorSubject(false) // initial state  = false
  // company table
  company = new BehaviorSubject([]);

  seedDatabase() {
    // connect to database
    //offlinestorage\src\app\Queries\seed.sql
    this.http.get('assets/seed.sql', { responseType: 'text' })
      .subscribe(sql => {
        this.sqlPortal.importSqlToDb(this.database, sql)
          .then(() => {
            this.fetchCompanies();
            this.dbReady.next(true); // track changes
          })
          .catch(e => console.error(e))
      })
  }

  getDatabaseState() {
    return this.dbReady.asObservable();
  }

  getCompanies(): Observable<Company[]> {
    console.log("company")
    return this.company.asObservable();
  }

  // fetch all data
  fetchCompanies() {
    this.database.executeSql('SELECT * FROM company', []).then(data => {
      let allCompany: Company[] = [];

      // if data available
      if (data.rows.length > 0) {
        for (var i = 0; i < data.rows.length; i++) {
          console.log(data.rows)
          // push all data to temp array
          allCompany.push({
            id: data.rows.item(i).id,
            companyName: data.rows.item(i).companyName,
            headquater: data.rows.item(i).headquater,
            ceo: data.rows.item(i).ceo,
            headcount: data.rows.item(i).headcount,
          })
        }
      }
      // emit the company to all subscribers
      this.company.next(allCompany)
    })
  }

  // add company 
  addCompany(company: Company) {
    let data = [company.companyName, company.headquater, company.ceo, company.headcount];
    return this.database.executeSql('INSERT INTO company (companyName, headquater, ceo, headcount) VALUES (?,?,?,?)', data)
      .then(data => {
        this.fetchCompanies(); //  re fetch all data from db
      })
  }

  // get company data by id
  getCompany(id): Promise<Company> {
    return this.database.executeSql('SELECT * FROM company WHERE id = ?', [id])
      .then(data => {
        let allCompanies: Company[] = [];

        return {
          id: data.rows.item(0).id,
          companyName: data.rows.item(0).companyName,
          headquater: data.rows.item(0).headquater,
          ceo: data.rows.item(0).ceo,
          headcount: data.rows.item(0).headcount,
        }
      })
  }

  // delete data
  deleteCompany(id) {
    return this.database.executeSql('DELETE FROM company WHERE id = ?', [id]).then(() => {
      this.fetchCompanies();
    })
  }

  // update data
  updateCompany(company: Company) {
    let data = [company.companyName, company.headquater, company.ceo, company.headcount];
    return this.database.executeSql(`UPDATE company SET companyName = ? , headquater = ? , ceo = ? , headcount = ? WHERE id = ${company.id}`, data)
      .then(() => {
        this.fetchCompanies();

        // back to list
        this.router.navigateByUrl('/home')
      })
  }
}
