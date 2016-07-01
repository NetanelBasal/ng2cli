import {
  async,
  beforeEachProviders,
  describe,
  ddescribe,
  expect,
  iit,
  it,
  inject
} from '@angular/testing/core';
import { ComponentFixture, TestComponentBuilder } from '@angular/testing/core';
import { provide, Component } from '@angular/core';
import { {{name | camelCase}}Directive } from './{{name | kebabCase}}.directive';

describe('{{name | camelCase}} Directive', () => {
  // Create a test component to test directives
  @Component({
    template: '',
    directives: [ {{name | camelCase}}Directive ]
  })
  class TestComponent {}

  it('should ...', async(inject([TestComponentBuilder], (tcb) => {
    return tcb.overrideTemplate(TestComponent, '<div {{name | camelCaseOnly}}>Content</div>')
      .createAsync(TestComponent).then((fixture: any) => {
        fixture.detectChanges();
        let compiled = fixture.debugElement.nativeElement.children[0];
        // expect(compiled.style.fontSize).toBe('x-large');
      });
  })));

});
