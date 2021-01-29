import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DeskPage } from './desk.page';

describe('DeskPage', () => {
  let component: DeskPage;
  let fixture: ComponentFixture<DeskPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeskPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DeskPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
