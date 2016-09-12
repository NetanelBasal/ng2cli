import {
  TestBed
} from '@angular/testing/core';
import { {{name | camelCase}}Component } from './{{name | kebabCase}}.component';

describe('Component: {{name | camelCase}}', () => {

  let fixture: ComponentFixture<{{name | camelCase}}Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [{{name | camelCase}}Component]
    });
    fixture = TestBed.createComponent({{name | camelCase}}Component);
  });

  it('should have some h1', () => {
    const component = fixture.componentInstance;
    fixture.detectChanges();
    const element = fixture.nativeElement;
    expect(element.querySelector('h1').textContent).toBe('Something');
  });

});
