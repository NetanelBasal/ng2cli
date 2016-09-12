
import {CommonModule} from '@angular/common';
import {Component} from '@angular/core';
import {ComponentFixture, TestBed, async} from '@angular/core/testing';
import {getDOM} from '@angular/platform-browser/src/dom/dom_adapter';
import {expect} from '@angular/platform-browser/testing/matchers';

describe('{{name | camelCase}} Directive', () => {
  let fixture: ComponentFixture<any>;

  function getComponent(): TestComponent {
    return fixture.componentInstance;
  }

  afterEach(() => { fixture = null; });

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestComponent],
      imports: [CommonModule]
    });
  });

  it('should do some dom manipulation', async(() => {
       const template = '<div {{name | camelCaseOnly}}>hello</div>';
       fixture = createTestComponent(template);

       fixture.detectChanges();
       expect(getDOM().querySelectorAll(fixture.nativeElement, 'span').length).toEqual(1);
       expect(fixture.nativeElement).toHaveText('hello');
     }));

  });

// Create a test component to test directives
@Component({selector: 'test-cmp', template: ''})
class TestComponent {}

function createTestComponent(template: string): ComponentFixture<TestComponent> {
  return TestBed.overrideComponent(TestComponent, {set: {template: template}})
      .createComponent(TestComponent);
}
