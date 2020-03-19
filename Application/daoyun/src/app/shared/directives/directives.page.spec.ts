import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DirectivesPage } from './directives.page';

describe('DirectivesPage', () => {
  let component: DirectivesPage;
  let fixture: ComponentFixture<DirectivesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirectivesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DirectivesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
