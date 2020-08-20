import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CreatecompanyPage } from './createcompany.page';

describe('CreatecompanyPage', () => {
  let component: CreatecompanyPage;
  let fixture: ComponentFixture<CreatecompanyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatecompanyPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CreatecompanyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
