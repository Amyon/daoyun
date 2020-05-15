import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CreateclassPage } from './createclass.page';

describe('CreateclassPage', () => {
  let component: CreateclassPage;
  let fixture: ComponentFixture<CreateclassPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateclassPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CreateclassPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
