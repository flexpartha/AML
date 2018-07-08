import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactsummeryListComponent } from './contactsummery-list.component';

describe('ContactsummeryListComponent', () => {
  let component: ContactsummeryListComponent;
  let fixture: ComponentFixture<ContactsummeryListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactsummeryListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactsummeryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
