import {
  beforeEach,
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { ComponentFixture, TestComponentBuilder } from '@angular/compiler/testing';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';
import { {{name | camelCase}}Component } from './{{name | kebabCase}}.component';

describe('Component: {{name | camelCase}}', () => {
  let builder: TestComponentBuilder;

  beforeEachProviders(() => [{{name | camelCase}}Component]);
  beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder) {
    builder = tcb;
  }));

  it('should inject the component', inject([{{name | camelCase}}Component],
      (component: {{name | camelCase}}Component) => {
    expect(component).toBeTruthy();
  }));

  it('should create the component', inject([], () => {
    return builder.createAsync({{name | camelCase}}ComponentTestController)
      .then((fixture: ComponentFixture<any>) => {
        let query = fixture.debugElement.query(By.directive({{name | camelCase}}Component));
        expect(query).toBeTruthy();
        expect(query.componentInstance).toBeTruthy();
      });
  }));
});

@Component({
  selector: 'test',
  template: `
    <{{name | kebabCase}}></{{name | kebabCase}}>
  `,
  directives: [{{name | camelCase}}Component]
})
class {{name | camelCase}}ComponentTestController {
}
