# Angular 2 templates generator

CLI util for easy generate Angular 2 files
## Installation

```bash
npm install -g ng2cli
```

## Usage

```bash
ng2cli --help
```

### Generating scaffolds

Add a new component with:
```bash
ng2cli footer
```
Will generate folder named footer with three files:
1. footer.tpl.html. ( or your default extension )
2. footer.scss ( or your default extension )
3. footer.component.ts
```ts
import {Component} from 'angular2/core';

@Component({
  selector: 'footer',
  template: '<h1>footer</h1>',
  providers: [],
  directives: [],
  pipes: []
})

export class Footer {
  //@Input() myProperty;
  //@Output() myEvent = new EventEmitter();

  constructor() {
  }
  //ngOnInit() { ... }
}
```

Add a new service with:
```bash
ng2cli -s log
```
Will generate:
```ts
import { Injectable } from 'angular2/angular2';
import { Http } from 'angular2/http';

@Injectable()
class LogService {
  constructor(private http: Http) {
  }
}
//don't forget: bootstrap(AppComponent, [LogService]);
```

Add a new pipe with:
```bash
ng2cli -p camel-case
```
Will generate:
```ts
import {Pipe} from 'angular2/core';
// don't forget: pipes: [CamelCasePipe]

@Pipe({name: 'camelCase'})

export class CamelCasePipe {
  transform( value :number, args :string[] ) :any {
    return value;
  }
}

```

Add a new stateful pipe with:
```bash
ng2cli --sp uppercase
```
Will generate:
```ts
import {Pipe} from 'angular2/core';

//Pipes are stateless by default. We must declare a pipe to be stateful by setting the pure property of the @Pipe decorator to false.
//This setting tells Angular’s change detection system to check the output of this pipe each cycle, whether its input has changed or not.
// don't forget: pipes: [uppercasePipe]

@Pipe({
  name: 'uppercase',
  pure: false
})

export class UppercasePipe {
  private fetchedValue:any;
  private fetchPromise:Promise<any>;

  transform(value:string, args:string[]):any {
    if (!this.fetchPromise) {
      this.fetchPromise = window.fetch(value)
        .then((result:any) => result.json())
        .then((json:any)   => this.fetchedValue = json);
    }
    return this.fetchedValue;
  }

}
```

Add a new directive with:
```bash
ng2cli -d my-directive
```
Will generate:
```ts
import {Directive, ElementRef, Renderer, Input} from 'angular2/core';

@Directive({
  selector: '[my-directive]',
  host: {
    //'(mouseenter)': 'onMouseEnter()'
  }
})

export class MyDirective {

}
```
Add a new stractural directive with:
```bash
ng2cli --sd my-directive
```
Will generate ful example to manipulate:
```ts
import {Directive, Input} from 'angular2/core';
import {TemplateRef, ViewContainerRef} from 'angular2/core';

@Directive({ selector: '[myUnless]' })

export class UnlessDirective {
  constructor(
    private _templateRef: TemplateRef,
    private _viewContainer: ViewContainerRef
    ) { }

  @Input() set myUnless(condition: boolean) {
    if (!condition) {
      this._viewContainer.createEmbeddedView(this._templateRef);
    } else {
      this._viewContainer.clear();
    }
  }

}
```

### Change the default file types for html and style
If you are using something else from the default html and scss you can set this one time like this:
```bash
ng2cli --html jade --style less
```

### Notes
I didn't wanted to create generator for full scafold app because i know that every devleoper like to use other tool like gulp, webpack, systemjs, etc..
So now you can now integrate this tool to every project :)