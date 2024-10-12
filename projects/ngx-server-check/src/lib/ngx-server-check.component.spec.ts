import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxServerCheckComponent } from './ngx-server-check.component';

describe('NgxServerCheckComponent', () => {
  let component: NgxServerCheckComponent;
  let fixture: ComponentFixture<NgxServerCheckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgxServerCheckComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgxServerCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
