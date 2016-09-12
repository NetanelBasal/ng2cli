import {
  TestBed
} from '@angular/testing/core';
import { FooterComponent } from './footer.component';

describe('Component: Footer', () => {

  let fixture: ComponentFixture<FooterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FooterComponent]
    });
    fixture = TestBed.createComponent(FooterComponent);
  });

  it('should have some h1', () => {
    const component = fixture.componentInstance;
    fixture.detectChanges();
    const element = fixture.nativeElement;
    expect(element.querySelector('h1').textContent).toBe('Something');
  });

});
