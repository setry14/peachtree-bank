import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NotFoundComponent } from './not-found.component';
import { AppModule } from '../app.module';

describe('NotFoundComponent', () => {
  let component: NotFoundComponent;
  let fixture: ComponentFixture<NotFoundComponent>;

  const prepareTestBed = () => {
    TestBed.configureTestingModule({
      declarations: [NotFoundComponent],
      imports: [AppModule]
    }).compileComponents();
    fixture = TestBed.createComponent(NotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  };

  beforeEach(() => {
    prepareTestBed();
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });
});
