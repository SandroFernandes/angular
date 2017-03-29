import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServerTesteComponent } from './server-teste.component';

describe('ServerTesteComponent', () => {
  let component: ServerTesteComponent;
  let fixture: ComponentFixture<ServerTesteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServerTesteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServerTesteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
