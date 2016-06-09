# Angular 2/ngrx templates generator

CLI util for easy generate Angular 2 and [ngrx](https://github.com/ngrx/store) files
## Installation
```js
npm install -g ng2cli
```

## Usage

```bash
ng2cli --help
```

####**Create new component**####
```bash
ng2cli footer
```
Will generate four files:

**footer.component.ts**
```javascript
import { Component, EventEmitter, Input, Output, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'footer',
  template: require('./footer.component.html'),
  style: [require('./footer.component.scss')],
  providers: [],
  directives: [],
  pipes: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})


export class FooterComponent implements OnInit {
  @Input() myProperty;
  @Output() myEvent = new EventEmitter<string>();

  constructor() {

  }

  ngOnInit() {

  }
}

```

**footer.component.spec.ts**
```javascript
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
import { FooterComponent } from './footer.component';

describe('Component: Footer', () => {
  let builder: TestComponentBuilder;

  beforeEachProviders(() => [FooterComponent]);
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

```

**footer.component.html**
```html
<section class="footer">
  <h1>footer Component</h1>
  <input type="text" #input />
  <button (click)="myEvent.emit(input.value)">Click me</button>
</section>

```

**footer.component.scss**
```css
.footer {

}
```

####**Create new service**####
```bash
ng2cli -s todos
```
Will generate two files:

**todos.service.ts**
```javascript
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
class TodosService {

  constructor(private http: Http) {
  }

}

```
**todos.service.spec.ts**
```javascript
import { Component } from '@angular/core';
import {
    beforeEachProviders,
    describe,
    expect,
    inject,
    fakeAsync,
    tick,
    it
} from '@angular/core/testing';
import { BaseRequestOptions, Http } from '@angular/http';
import { MockBackend } from '@angular/http/testing';
import { TodosService } from './todos.service';

describe('Todos Service', () => {
    beforeEachProviders(() => [
        BaseRequestOptions,
        MockBackend,
        {
            provide: Http,
            useFactory: function(backend, defaultOptions) {
                return new Http(backend, defaultOptions);
            },
            deps: [MockBackend, BaseRequestOptions]
        },
        TodosService
    ]);

it('should ...',
    inject([TodosService], (todosService: TodosService) => {
        expect(todosService).toBeTruthy();
    }));
    /**
      When you are testing code that returns either a Promise or an RxJS Observable,
      you can use the fakeAsync helper to test that code as if it were synchronous.
      Promises are be fulfilled and Observables are notified immediately after you call tick()
    **/
    it('should make HTTP request',
      inject([TodosService, MockBackend], fakeAsync((todosService:TodosService, mockBackend:MockBackend) => {
        var res:Response;
        mockBackend.connections.subscribe(c => {
          expect(c.request.url).toBe('some.api.call');
          let response = new ResponseOptions({body: '[{}, {}]'});
          c.mockRespond(new Response(response));
        });
        todosService.get().subscribe(response => {
          res = response;
        });
        tick();
        expect(res.length).toBe(2);
      }))
    );
 });

```
####**Create new pipe**####
```bash
ng2cli -p camel-case
```
Will generate two files:

**camel-case.pipe.ts**
```ts
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'camelCase'})

export class CamelCasePipe implements PipeTransform {

  transform( value: any, args?: any): any {
    return null;
  }

}

```


**camel-case.pipe.spec.ts**
```ts
import {
  beforeEachProviders,
  describe,
  expect,
  inject,
  it
} from '@angular/core/testing';
import { CamelCasePipe } from './camel-case.pipe';

describe('Pipe: CamelCase', () => {
  beforeEachProviders(() => [CamelCasePipe]);

  it('should transform the input', inject([CamelCasePipe], (pipe: CamelCasePipe) => {
      expect(pipe.transform(true)).toBe(null);
  }));
});

```

####**Create new stateful pipe**####
```bash
ng2cli --sp stateful
```
Will generate: ( with test file )
```ts
import { Pipe, PipeTransform } from '@angular/core';
import { Http }                from '@angular/http';
import 'rxjs/operators/map';

@Pipe({
    name: 'stateful',
    pure: false
})

export class StatefulPipe {
    private fetchedJson: any = null;
    private prevUrl = '';
    constructor(private _http: Http) { }

    transform(url: string): any {
        if (url !== this.prevUrl) {
            this.prevUrl = url;
            this.fetchedJson = null;
            this._http.get(url)
                .map(result => result.json())
                .subscribe(result => this.fetchedJson = result);
        }
        return this.fetchedJson;
    }

}

```
####**Create new directive**####
```bash
ng2cli -d my-directive
```
will generate two files:

**my-directive.directive.ts**
```ts
import { Directive, ElementRef, Input, HostListener, HostBinding, Renderer } from '@angular/core';

@Directive({
  selector: '[myDirective]'
})

export class MyDirectiveDirective {

  constructor(el: ElementRef, renderer: Renderer) {
     //el.nativeElement.style.backgroundColor = 'yellow';
    // renderer.setElementStyle(element.nativeElement, 'fontSize', 'x-large');
  }

  @HostBinding('attr.role') role = 'button';

  @HostListener('mouseenter')
  onMouseEnter() {

  }

}

```

**my-directive.directive.spec.ts**
```ts
import {
  async,
  beforeEachProviders,
  describe,
  ddescribe,
  expect,
  iit,
  it,
  inject
} from '@angular/core/testing';
import { ComponentFixture, TestComponentBuilder } from '@angular/compiler/testing';
import { provide, Component } from '@angular/core';
import { MyDirectiveDirective } from './my-directive.directive';

describe('MyDirective Directive', () => {
  // Create a test component to test directives
  @Component({
    template: '',
    directives: [ MyDirectiveDirective ]
  })
  class TestComponent {}

  it('should ...', async(inject([TestComponentBuilder], (tcb) => {
    return tcb.overrideTemplate(TestComponent, '<div myDirective>Content</div>')
      .createAsync(TestComponent).then((fixture: any) => {
        fixture.detectChanges();
        let compiled = fixture.debugElement.nativeElement.children[0];
        // expect(compiled.style.fontSize).toBe('x-large');
      });
  })));

});

```
####**Create new stractural directive**####
```bash
ng2cli --sd my-directive
```
Will generate: ( with test file )
```ts
import {Directive, Input, TemplateRef, ViewContainerRef} from '@angular2/core';

@Directive({ selector: '[myDirective]' })

export class MyDirectiveDirective {
  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
    ) { }

  @Input() set myDirective(condition: boolean) {
    if (!condition) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainer.clear();
    }
  }

}
```

##ngrx/store
####**Create new ngrx reducer with actions**####
```bash
ng2cli -r todos -a add_todo remove_todo
```
Will generate three files:

***todos.actions.ts***
```javascript
export const ADD_TODO = 'ADD_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
```
***todos.reducer.ts***
```javascript
import { ActionReducer, Action } from '@ngrx/store';
import * as todosActions from './todos.actions';

export const todosReducer: ActionReducer<type> = (state: type = [], action: Action) => {
    switch (action.type) {
      case todosActions.ADD_TODO
        return [...state, action.payload];
      case todosActions.REMOVE_TODO
        return [...state, action.payload];
      default:
        return state;
    }
}

```

***todos.reducer.spec.ts***
```javascript
import {
  it,
  describe,
  expect
} from 'angular2/testing';
import * as todosActions from './todos.actions';
import { todos } from "./todos";

describe('The todos reducer', () => {
    it('should return current state when x action is dispatched', () => {
        const actual = todos(0, {type: todosActions.x});
        const expected = 0;
        expect(actual).toBe(expected);
    });
});

```

####**Create new actions**####
```bash
ng2cli -n todos -a add_todo remove_todo
```
***todos.actions.ts***
```javascript
export const ADD_TODO = 'ADD_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
```

### Change the default file types for html and style
If you are using something else from the default html and scss you can set this one time like this:
```bash
sudo ng2cli --html jade --style less
```
### PR ME!!!
If you want to fix/improve the templates please PR ME.
