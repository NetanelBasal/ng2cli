import {
  beforeEach,
  addProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/testing/core';
import { ComponentFixture, TestComponentBuilder } from '@angular/testing/core';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';
import { FooterComponent } from './footer.component';

describe('Component: Footer', () => {
  let builder: TestComponentBuilder;

  beforeEach(() => {
    addProviders([FooterComponent]);
  });

  beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder) {
    builder = tcb;
  }));

  it('should inject the component', inject([FooterComponent],
      (component: FooterComponent) => {
    expect(component).toBeTruthy();
  }));

  it('should create the component', inject([], () => {
    return builder.createAsync(FooterComponentTestController)
      .then((fixture: ComponentFixture<any>) => {
        let query = fixture.debugElement.query(By.directive(FooterComponent));
        expect(query).toBeTruthy();
        expect(query.componentInstance).toBeTruthy();
      });
  }));
});

@Component({
  selector: 'test',
  template: `
    <footer></footer>
  `,
  directives: [FooterComponent]
})
class FooterComponentTestController {
}
