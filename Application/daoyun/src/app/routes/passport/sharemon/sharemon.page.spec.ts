import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SharemonPage } from './sharemon.page';

describe('SharemonPage', () => {
  let component: SharemonPage;
  let fixture: ComponentFixture<SharemonPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SharemonPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SharemonPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
