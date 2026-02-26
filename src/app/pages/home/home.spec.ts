// home.spec.ts
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeComponent } from './home';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have 4 users', () => {
    expect(component.users.length).toBe(4);
  });

  it('should select Antonia by default', () => {
    expect(component.selectedUser?.name).toBe('Antonia Céspedes');
  });

  it('should change selected user on selectUser()', () => {
    component.selectUser(component.users[1]);
    expect(component.selectedUser?.name).toBe('Emilia Torres');
  });
});
