import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CompanylistPage } from './companylist.page';

describe('CompanylistPage', () => {
  let component: CompanylistPage;
  let fixture: ComponentFixture<CompanylistPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanylistPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CompanylistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
