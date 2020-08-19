import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddcompanyPage } from './addcompany.page';

describe('AddcompanyPage', () => {
  let component: AddcompanyPage;
  let fixture: ComponentFixture<AddcompanyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddcompanyPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddcompanyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
