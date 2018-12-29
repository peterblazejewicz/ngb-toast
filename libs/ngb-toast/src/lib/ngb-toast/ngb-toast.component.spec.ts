import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgbToastComponent } from './ngb-toast.component';

fdescribe('NgbToastComponent', () => {
  let component: NgbToastComponent;
  let fixture: ComponentFixture<NgbToastComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NgbToastComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgbToastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  afterEach(() => {
    fixture.destroy();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have the BS toast class', () => {
    expect(fixture.nativeElement).toHaveCssClass('toast');
  });

  it('should have role attribute', () => {
    expect(fixture.nativeElement.hasAttribute('role')).toBe(true);
  });

  it('shold have a role attribute with value alert', () => {
    expect(fixture.nativeElement.getAttribute('role')).toBe('alert');
  });

  it('should have aria live attribute', () => {
    expect(fixture.nativeElement.hasAttribute('aria-live')).toBe(true);
  });

  it('should have aria live attribute with value `assertive`', () => {
    expect(fixture.nativeElement.getAttribute('aria-live')).toBe('assertive');
  });

  it('should have aria atomic attribute', () => {
    expect(fixture.nativeElement.hasAttribute('aria-atomic')).toBe(true);
  });

  it('should have aria atomic attribute to equal to true', () => {
    expect(fixture.nativeElement.getAttribute('aria-atomic')).toBe('true');
  });
});
