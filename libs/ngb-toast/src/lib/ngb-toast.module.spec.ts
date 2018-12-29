import { async, TestBed } from '@angular/core/testing';
import { NgbToastModule } from './ngb-toast.module';

describe('NgbToastModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [NgbToastModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(NgbToastModule).toBeDefined();
  });
});
