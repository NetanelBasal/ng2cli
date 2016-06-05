import {Directive, Input, TemplateRef, ViewContainerRef} from '@angular2/core';

@Directive({ selector: '[{{name | camelCaseOnly}}]' })

export class {{name | camelCase}}Directive {
  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
    ) { }

  @Input() set {{name | camelCaseOnly}}(condition: boolean) {
    if (!condition) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainer.clear();
    }
  }

}
